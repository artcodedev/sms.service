
import { SecretKey } from "../Secure/SeckretKey";
import { Sim800c } from "../Utils/Sim800C/Sim800c";
import { Token } from "../Utils/Token";
import { Response, ReqDeleteALlMessage } from '../Interfaces/interfaces';


export class DeleteAllMessage {

    public static async deleteAllMessage({...pr}: ReqDeleteALlMessage): Promise<Response> {

        try {

            const token: boolean = await Token.verify(pr.token, SecretKey.secret_key_micro);

            if (token) {

                console.log(pr)
                
                const sim = new Sim800c(pr.port, 9600);

                await sim.openPortSim800c();

                await sim.deleteAllMessage();

                await sim.closePortSim800c()

                return { status: true }
            }

            return { status: false }

        } catch (e) {

            return { status: false }
        }
    }
}