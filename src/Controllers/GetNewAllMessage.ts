
import { Sim800c } from "../Utils/Sim800C/Sim800c";
import { ApiGetNewMessage, NewMessages } from "../Interfaces/interfaces";

interface Response {
    status: boolean
    data?: NewMessages[]
}

export class GetNewAllMessage {

    public static async getNewAllMessage({...pr}: ApiGetNewMessage): Promise<Response> {

        try {

            const sim = new Sim800c(pr.port, 9600);

            await sim.openPortSim800c();

            const response: NewMessages[] = await sim.getNewAllMessage(pr.number);

            await sim.closePortSim800c()

            return { status: true, data: response}

        } catch(e) {
            return {status: false}
        }

    }
}