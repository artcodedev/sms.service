import { serve } from '@hono/node-server';
import { Hono } from 'hono'
import { TTYGetter } from './Utils/TTYGetter';
import { Console } from './Utils/Console';

const app = new Hono();
const port = 3005;

/*
*** Index page
*/
app.get('/', async (c) => {

  const tty = new TTYGetter();

  const ports = await tty.tty();

  return c.text('Please indicate the correct parameters');
})

/*
*** Get information
*/
app.post('/get', (c) => {

  return c.json({status: true})

});

/*
*** Send sms
*/
app.post('send', (c) => {
  return c.json({status: true})
})

Console.log(`Server start on port ${port}`);

serve({ fetch: app.fetch, port });

export default app

