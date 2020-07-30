import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { createServer, Server } from 'http';
import socketio, { Socket, Namespace } from 'socket.io';

import { connectDB } from './config/db';

const app: Application = express();
const http: Server = createServer(app);
const PORT: string = process.env.PORT || '5000';
const io = socketio(http);

connectDB();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('<p>Server</p>');
});

io.on('connection', (socket: Socket) => {
  const { id } = socket.client;
  console.log(`User Connected: ${id}`);
  socket.on('chat message', ({ nickname, msg }) => {
    io.emit('chat message', { nickname, msg });
  });
});

http.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});