
/*
*** LINUX ONLY
*/

import * as fs from 'fs';
import { Sim800c } from './Sim800C/Sim800c';



interface TTY {
    phone: string
    tty: string
}

interface DATA {
    ports: TTY[]

}

export class TTYGetter {

    constructor() { }

    /*
    *** Get all ports tty (linux only)
    */
    private async getAllTTY(): Promise<string[]> {

        const ports: string[] = []

        for (let i: number = 0; i < 256; i++) {

            const port: string = `/dev/ttyUSB${i}`;
            if (fs.existsSync(port)) { ports.push(port) }
        }

        return ports
    }

    /*
    *** Check all ports tty (linux only)
    */
    private async requestTTY(port: string): Promise<TTY> {

        let resTTY: TTY = { phone: '', tty: '' }

        try {

            const tty = new Sim800c(port, 9600);

            await tty.openPortSim800c();

            const res: string = await tty.command("AT");

            if (res.includes("OK")) {

                const phone: string | null = await tty.getNumberPhone();

                if (phone != null) {

                    resTTY.phone = phone.split(',')[1].replaceAll('"', '');
                    resTTY.tty = port
                }
            }

            await tty.closePortSim800c();

        } catch (e) {
            /*
            *** catch Error
            */
        }

        return resTTY;
    }

    private async saveTTY(): Promise<boolean> {
        return false
    }

    public async tty(): Promise<TTY[]> {

        const tty: TTY[] = []

        const ports: string[] = await this.getAllTTY();

        if (ports.length) {
            for (let i: number = 0; i < ports.length; i++) {
                const resposneTTY: TTY = await this.requestTTY(ports[i]);

                if (resposneTTY.phone.length) tty.push(resposneTTY)
            }
        }

        if (tty.length) {

            const data: DATA = {
                ports: tty
            }

            fs.writeFile('./Ports/tty.json', JSON.stringify(data), 'utf-8', (e) => {
                console.log(e)
            })
            // some file
        }


        return tty;
    }

}





// const main = async () => {

//     const tty = new TTYGetter()
//     const ports: TTY[] = await tty.tty();

//     console.log(ports);


// }; main();

/*


{
   -- prvider
   -- number
   -- tty
}


*/