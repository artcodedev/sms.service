
import { Sim800c } from "../Utils/Sim800C/Sim800c";

interface Response {
    status: boolean
}

export class DeleteAllMessage {

    public static async deleteAllMessage({port}: {port: string}): Promise<Response> {

        try {
            
            const sim = new Sim800c(port, 9600);

            await sim.openPortSim800c();

            await sim.deleteAllMessage();

            await sim.closePortSim800c()

            return {status: true}

        } catch (e) {
            return {status: false}
        }
    }
}