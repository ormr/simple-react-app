import express, { Request, Response } from 'express';
import http from 'http';
import useSocket, { Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = useSocket(server);

const rooms: Map<any, any> = new Map([]);

app.use(express.json());

app.get('/rooms', (req: Request, res: Response) => {
  res.json(rooms);
});

app.post('/rooms', (req: Request, res: Response) => {
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(roomId,
      new Map<any, any>([
        ['users', new Map()],
        ['messages', []]
    ]));
  }
  res.json([...rooms.keys()]);
});

io.on('connection', (socket: Socket) => {
  socket.on('ROOM:JOIN', ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    socket.to(roomId).broadcast.emit('ROOM:JOINED', users);
  });

  console.log('User connected', socket.id);
})

server.listen(5000, () => {
  console.log('Server has been started');
});