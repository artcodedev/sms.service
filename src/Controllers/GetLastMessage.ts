
import { Sim800c } from "../Utils/Sim800C/Sim800c";
import { ApiGetNewMessage, Message } from "../Interfaces/interfaces";

interface Response {
    status: boolean
    data?: Message | []
}

export class GetLastMessage {

    public static async getLastMessage({...pr}: ApiGetNewMessage): Promise<Response>  {

        try {

            const sim = new Sim800c(pr.port, 9600);

            await sim.openPortSim800c();

            const response: Message | [] = await sim.getLastMessage(pr.number);

            await sim.closePortSim800c()

            return { status: true, data: response}

        } catch(e) {
            return {status: false}
        }
    }
}