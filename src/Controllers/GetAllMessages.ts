import { Sim800c } from "../Utils/Sim800C/Sim800c";
import { ApiGetAllMessages, Message } from "../Interfaces/interfaces";

interface Response {
    status: boolean
    data?: Message[]
}

export class GetAllMessages {

    public static async getAllMessages({...pr}: ApiGetAllMessages ): Promise<Response>  {
        try {

            const sim = new Sim800c(pr.port, 9600);

            await sim.openPortSim800c();

            const response: Message[] = await sim.getAllMessages(pr.number);

            await sim.closePortSim800c()

            return { status: true, data: response}

        } catch(e) {
            return {status: false}
        }
    }
}