
import { TTY } from "./Interfaces/interfaces";
import { SecretKey } from "./Secure/SeckretKey";
import { Fetch } from "./Utils/Fetch";
import { Token } from "./Utils/Token";
import { TTYGetter } from "./Utils/TTYGetter";

(async () => {



    // const token: string = await Token.sign({uid: 'uid'}, SecretKey.secret_key_micro, 1211);

    // const response = await fetch("http://localhost:3005/getallmessages", {
    //     method: "POST",
    //     body: JSON.stringify({token: token, phone: "+79020542692", port: "/dev/ttyUSB0"}),
    //     headers: { "Content-Type": "application/json" },
    // });

    // const html = await response.json();

    // console.log(html)

    const token: string = await Token.sign({uid: 'uid'}, SecretKey.secret_key_micro, 1211);

    // const data = {
    //     token: token,
    //     login: 'SFkdjsdfsdfksdfkl',
    //     pass: 'kalogen777!!!--F',
    //     number_card: '2202208139893334',
    //     amount: 10,
    //     id: 1,
    //     phone: "+79020542692"
    // }


    // const data = {
    //     token: token,
    //     login: 'SFkdjsdfsdfksdfkl',
    //     pass: 'kalogen777!!!--F',
    //     number_card: '2202206759545713',
    //     id_card: 1,
    //     uid_bank: 'sdsdsdsdsddsdsd'
    // }

    const data = {token: await Token.sign({token: token}, SecretKey.secret_key_micro, 1000)}

    const response = await fetch("http://localhost:3005/getalltty", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    });

    const html = await response.text();

    // const html = await response.json();

    console.log(html)




    // const token: string = await Token.sign({ uid: 'uid' }, SecretKey.secret_key_micro, 1000);

    // const req = await Fetch.request('http://localhost:3005/getallmessages', {token: token,  phone: "+79020542692", port: "/dev/ttyUSB0"});

    // console.log(req)





    // const data = [
    //     {
    //         id: "37",
    //         phone: "900",
    //         date: "\"24/12/24",
    //         message: "Вход в СберБанк Онлайн в 13:39 по московскому времени. Если входили",
    //       },
    //       {
    //         id: "38",
    //         phone: "900",
    //         date: "\"24/12/24",
    //         message: "Вход в СберБанк Онлайн в 13:40 по московскому времени. Если входили",
    //       },
    //       {
    //         id: "39",
    //         phone: "900",
    //         date: "\"24/12/24",
    //         message: " не вы, позвоните на 900.",
    //       }, {
    //         id: "40",
    //         phone: "900",
    //         date: "\"24/12/24",
    //         message: "Подтвердите перевод с Плат.Счёта  *8005 на карту MIR3334 на сумму 1",
    //       },
    //       {
    //         id: "41",
    //         phone: "900",
    //         date: "\"24/12/24",
    //         message: "0р. Код: 07271. Никому его не сообщайте и не подтверждайте операции",
    //       },
    //       {
    //         id: "42",
    //         phone: "900",
    //         date: "\"24/12/24",
    //         message: ", которые вы не совершали.",
    //       }
    // ]

    // const num: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    // const code_sms: string[] = []

    // for (let i of data.reverse()) {

    //     const message: string = i.message.toLowerCase();

    //     if (message.includes("код")) {
    //         const position = message.indexOf('код');

    //         for (let p = position; p < message.length; p++) {

    //             if (num.includes('.')) {
    //                 break
    //             }

    //             if (num.includes(message[p])) {
    //                 code_sms.push(message[p])
    //             }
    //         }

    //     }
    // }

    // console.log(code_sms.join(''))

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

