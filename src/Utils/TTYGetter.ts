
/*
*** LINUX ONLY
*/

import * as fs from 'fs';
import { Sim800c } from './Sim800C/Sim800c';
import { TTY } from '../Interfaces/interfaces';

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

    public async tty(): Promise<TTY[]> {

        const tty: TTY[] = []

        const ports: string[] = await this.getAllTTY();

        if (ports.length) {
            for (let i: number = 0; i < ports.length; i++) {
                const resposneTTY: TTY = await this.requestTTY(ports[i]);

                if (resposneTTY.phone.length) tty.push(resposneTTY)
            }
        }

        return tty;
    }

}
