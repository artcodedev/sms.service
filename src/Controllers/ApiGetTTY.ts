import { TTYGetter } from '../Utils/TTYGetter';
import { ResponseTTY, TTY } from '../Interfaces/interfaces';
import { Token } from '../Utils/Token';
import { SecretKey } from '../Secure/SeckretKey';




export class ApiGetTTY {

    public static async tty({ token }: { token: string }) {


        const tok: boolean = await Token.verify(token, SecretKey.secret_key_micro);

        if (tok) {

            console.log('here')

            const tty = new TTYGetter()
            const ports: TTY[] = await tty.tty();

            console.log(ports)

            return { status: true, data: ports };
        }

        return { status: false, data: [] };
    }

}