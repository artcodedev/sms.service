
import { Sim800c } from "../Utils/Sim800C/Sim800c";
import { ApiGetNewMessage, Message, ResponseLastMessage } from "../Interfaces/interfaces";
import { Token } from "../Utils/Token";
import { SecretKey } from "../Secure/SeckretKey";


export class GetLastMessage {

    public static async getLastMessage({ ...pr }: ApiGetNewMessage): Promise<ResponseLastMessage> {

        try {

            const token: boolean = await Token.verify(pr.token, SecretKey.secret_key_micro);

            if (token) {
                const sim = new Sim800c(pr.port, 9600);

                await sim.openPortSim800c();

                const response: Message | [] = await sim.getLastMessage(pr.number);

                await sim.closePortSim800c()

                return { status: true, data: response }

            }

            return { status: false, data: [] }

        } catch (e) {
            return { status: false }
        }
    }
}