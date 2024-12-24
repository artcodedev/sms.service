
import { Sim800c } from "../Utils/Sim800C/Sim800c";
import { ApiGetNewMessage, NewMessages, ResponseNewLastMessage } from "../Interfaces/interfaces";
import { Token } from "../Utils/Token";
import { SecretKey } from "../Secure/SeckretKey";



export class GetNewLastMessage {

    public static async getNewLastMessage({ ...pr }: ApiGetNewMessage): Promise<ResponseNewLastMessage> {

        try {

            const token: boolean = await Token.verify(pr.token, SecretKey.secret_key_micro);

            if (token) {
                const sim = new Sim800c(pr.port, 9600);

                await sim.openPortSim800c();

                const response: NewMessages | [] = await sim.getNewLastMessage(pr.number);

                await sim.closePortSim800c()

                return { status: true, data: response }
            }

            return { status: false }

        } catch (e) { }

        return { status: false }

    }

} 