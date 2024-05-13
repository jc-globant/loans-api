import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { routes } from './routes/index.js';

export const server = express();

server.use(morgan('tiny'));
server.use(cors());
server.use(express.json());

server.use(routes);

server.get('/', (req, res) => {
  res.send('Hello World!');
});
