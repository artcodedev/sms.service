
import { TTY } from "./Interfaces/interfaces";
import { SecretKey } from "./Secure/SeckretKey";
import { Token } from "./Utils/Token";
import { TTYGetter } from "./Utils/TTYGetter";

(async () => {



    // const token: string = await Token.sign({uid: 'uid'}, SecretKey.secret_key_micro, 1211);

    // const response = await fetch("http://localhost:3005/getalltty", {
    //     method: "POST",
    //     body: JSON.stringify({token: token, phone: "+79020542692", port: "/dev/ttyUSB0"}),
    //     headers: { "Content-Type": "application/json" },
    // });

    // const html = await response.json();

    // console.log(html)

    const token: string = await Token.sign({uid: 'uid'}, SecretKey.secret_key_micro, 1211);

    const response = await fetch("http://localhost:3005/getallmessages", {
        method: "POST",
        body: JSON.stringify({token: token, phone: "+79020542692", port: "/dev/ttyUSB0"}),
        headers: { "Content-Type": "application/json" },
    });

    const html = await response.json();

    console.log(html)





    // const token: string = await Token.sign({uid: 'uid'}, SecretKey.secret_key_micro, 1211);

    // const response = await fetch("http://localhost:3005/deleteallmessage", {
    //     method: "POST",
    //     body: JSON.stringify({token: token, phone: "+79020542692", port: "/dev/ttyUSB0"}),
    //     headers: { "Content-Type": "application/json" },
    // });

    // const html = await response.json();

    // console.log(html)

})();





// import { Sim800c } from "./Utils/Sim800C/Sim800c";



// (async () => {

//     const res = new Sim800c("/dev/ttyUSB0", 9600);

//     await res.openPortSim800c()

//     const sms = await res.sendMessage("+79841533290", "hello1");

//     console.log(sms)

//     await res.closePortSim800c();
// })();

