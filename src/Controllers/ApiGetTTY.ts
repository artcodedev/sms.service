import { TTYGetter } from '../Utils/TTYGetter';
import { AnswerTTY, ResponseTTY, TTY } from '../Interfaces/interfaces';
import { Token } from '../Utils/Token';
import { SecretKey } from '../Secure/SeckretKey';


export class ApiGetTTY {

    public static async tty({ token }: { token: string }): Promise<AnswerTTY> {

        const tok: boolean = await Token.verify(token, SecretKey.secret_key_micro);

        if (tok) {

            const tty = new TTYGetter()
            const ports: TTY[] = await tty.tty();

            return { status: true, data: ports };
        }

        return { status: false, data: [] };
    }

}