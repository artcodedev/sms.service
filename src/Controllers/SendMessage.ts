




import { Sim800c } from "../Utils/Sim800C/Sim800c";

interface Response {
    status: boolean
}


interface RequestSMS {
    port: string
    number: string
    message: string
}


export class SendMessage {

    public static async sendMessage({...pr}: RequestSMS): Promise<Response> {

        try {
            
            // const sim = new Sim800c(pr.port, 9600);

            // await sim.openPortSim800c();

            // const response: boolean = await sim.sendMessage(pr.number, pr.message);

            // await sim.closePortSim800c()

            return {status: true}

        } catch (e) {

            console.log(e)
            return {status: false}
        }
    }
}