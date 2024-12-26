import { Sim800c } from "../Utils/Sim800C/Sim800c";
import { ApiGetAllMessages, Message, Response} from "../Interfaces/interfaces";
import { Token } from "../Utils/Token";
import { SecretKey } from "../Secure/SeckretKey";


export class GetAllMessages {

    public static async getAllMessages({ ...pr }: ApiGetAllMessages): Promise<Response> {
        try {

            const token: boolean = await Token.verify(pr.token, SecretKey.secret_key_micro);

            if (token) {

                const sim = new Sim800c(pr.port, 9600);

                await sim.openPortSim800c();

                const response: Message[] = await sim.getAllMessages(pr.number);

                await sim.closePortSim800c()

                return { status: true, data: response }
            }

            return { status: false, data: [] }


        } catch (e) {
            console.log(e)
            return { status: false, data: [] }
        }
    }
}