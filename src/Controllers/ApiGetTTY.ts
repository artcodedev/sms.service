import { TTYGetter } from '../Utils/TTYGetter';
import { TTY } from '../Interfaces/interfaces';

interface response {
    status: boolean
    data: TTY[]
}

export class ApiGetTTY {
    
    public static async tty(): Promise<response> {

        const tty = new TTYGetter()
        const ports: TTY[] = await tty.tty();

        return {status: true, data: ports};
    }

}