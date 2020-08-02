import express, { Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import useSocket from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = useSocket(server);

const rooms = new Map([]);

app.use(cors());

app.get('/rooms', (req: Request, res: Response) => {
  res.json(rooms);
});

io.on('connection', (socket) => {
  console.log('User connected');
})

server.listen(5000, () => {
  console.log('Server has been started');
});