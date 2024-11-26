import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { Console } from './Utils/Console';
import { ApiGetTTY } from './Controllers/ApiGetTTY';
import { GetNewLastMessage } from './Controllers/GetNewLastMessage';
import { GetNewAllMessage } from './Controllers/GetNewAllMessage';
import { GetLastMessage } from './Controllers/GetLastMessage';
import { GetAllMessages } from './Controllers/GetAllMessages';
import { DeleteAllMessage } from './Controllers/DeleteAllMessage';
import { SendMessage } from './Controllers/SendMessage';
import { Sim800c } from "./Utils/Sim800C/Sim800c";

const app = new Hono();
const port = 3005;


/* 

send message

============

Answers

{status: bool, data: any}some

*/

/*
*** Index page
*/

app.get('/', async (c) => c.json({ status: false, data: 'incorrect parameters' }))

/*
*** Send messages
*/
app.get('/sendmessage', async (c) => {

  // console.log(await SendMessage.sendMessage({ port: '/dev/ttyUSB0', number: "+79841533290", message: "hello1"}))

  return c.json({});

})

// app.post('/sendmessage', async (c) => c.json(await SendMessage.sendMessage(await c.req.json())))

/*
*** Get all tty
*/
app.post('/getalltty', async (c) => c.json(await ApiGetTTY.tty()));

/*
*** Get last new message
*/
app.post('/getnewlastmessage', async (c) => c.json(await GetNewLastMessage.getNewLastMessage(await c.req.json())));

/*
*** Get all new message
*/
app.post('/getnewallmessage', async (c) => c.json(await GetNewAllMessage.getNewAllMessage(await c.req.json())));

/*
*** Get last message
*/
app.post('/getlastmessage', async (c) => c.json(await GetLastMessage.getLastMessage(await c.req.json())));

/*
*** Get all message
*/
app.post('/getallmessages', async (c) => c.json(await GetAllMessages.getAllMessages(await c.req.json())));

/*
*** Delete all message
*/
app.post('/deleteallmessage', async (c) => c.json(await DeleteAllMessage.deleteAllMessage(await c.req.json())));


Console.log(`Server start on port ${port}`);

serve({ fetch: app.fetch, port });

export default app






