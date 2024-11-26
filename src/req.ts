

// (async () => {

//     const response = await fetch("localhost:3005/getallmessages", {
//         method: "POST",
//         body: JSON.stringify({ port: '/dev/ttyUSB0'}),
//         headers: { "Content-Type": "application/json" },
//     });
//     const html = await response.text();

//     console.log(html)

// })();



// import { Sim800c } from "./Utils/Sim800C/Sim800c";



// (async () => {

//     const res = new Sim800c("/dev/ttyUSB0", 9600);

//     await res.openPortSim800c()

//     const sms = await res.sendMessage("+79841533290", "hello1");

//     console.log(sms)

//     await res.closePortSim800c();
// })();

