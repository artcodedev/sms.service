




import { SecretKey } from "../Secure/SeckretKey";
import { Sim800c } from "../Utils/Sim800C/Sim800c";
import { Token } from "../Utils/Token";

import { Response } from '../Interfaces/interfaces'

interface RequestSMS {
    token: string
    port: string
    number: string
    message: string
}


export class SendMessage {

    public static async sendMessage({ ...pr }: RequestSMS): Promise<Response> {

        try {

            const token: boolean = await Token.verify(pr.token, SecretKey.secret_key_micro);

            if (token) {
                
                const sim = new Sim800c(pr.port, 9600);

                await sim.openPortSim800c();

                const response: boolean = await sim.sendMessage(pr.number, pr.message);

                await sim.closePortSim800c()

                return { status: true }
            }

            return { status: false }

        } catch (e) {

            console.log(e)
            return { status: false }
        }
    }
}