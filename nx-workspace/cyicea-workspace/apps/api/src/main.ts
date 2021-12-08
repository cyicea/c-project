import * as express from 'express';
import { Message,TestParam } from '@cyicea-workspace/api-interfaces';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  greeting.message = 'Welcome to api!';
  console.log(req.query);
  const prams:TestParam = { name : req.query?.name as string ?? null};
  switch(prams.name){
    case 'sss':
      greeting.message = `${greeting.message}牛逼666！`;
      res.send(greeting);
      break;
    case 'a':
      greeting.message = `${greeting.message}666！牛逼888！`;
      res.send(greeting);
      break;
    default:
      res.send(greeting);
      break;
  }
});

const port = process.env.port || 3300;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
