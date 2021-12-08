import * as express from 'express';
import { Message } from '@cyicea-workspace/api-interfaces';

const app = express();

const greeting: Message = { message: 'Welcome to api!牛逼666' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3300;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
