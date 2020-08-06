import express, { Request, Response } from 'express';
import http from 'http';
import useSocket, { Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = useSocket(server);

const rooms: Map<any, any> = new Map([]);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/rooms/:id', (req: Request, res: Response) => {
  const { id: roomId } = req.params;
  const data: any = rooms.has(roomId)
  ? {
    users: [...rooms.get(roomId).get('users')],
    messages: [...rooms.get(roomId).get('messages')]
    } 
  : { users: [], messages: [] }
  res.json(data);
});

app.post('/rooms', (req: Request, res: Response) => {
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map<any, any>([
        ['users', new Map()],
        ['messages', []]
      ])
    );
  }
  res.json([...rooms.keys()]);
});

io.on('connection', (socket: Socket) => {
  socket.on('ROOM:JOIN', ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
  });

  console.log('User connected', socket.id);

  socket.on('disconnect', () => {
    rooms.forEach((value, roomId) => {
      if (value.get('users').delete(socket.id)) {
        const users = [...value.get('users').values()];
        socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
      }
    });
  });

});

server.listen(5000, () => {
  console.log('Server has been started');
});