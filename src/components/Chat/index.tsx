import React, { useState, useEffect, useRef } from 'react';
import { socket } from '../../socket';

interface Props {
  users: {
    name: string;
    index: string;
  }[];
  messages: {
    text: string;
    userName: string;
  }[];
  userName: string;
  roomId: string;
  onAddMessage: (props: { userName: string, text: string, messageValue: string }) => any;
}

const Chat: React.FC<any> = ({ users, messages, userName, roomId, onAddMessage }: any) => {
  const [messageValue, setMessageValue] = useState('');
  const messagesRef: React.MutableRefObject<any> = useRef(null);

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    onAddMessage({ userName, Text, messageValue });
    setMessageValue('');
  };

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  console.log(users);

  return (
    <div className="chat">
      <div className="chat-users">
        Комната: <b>{roomId}</b>
        <hr />
        <b>Онлайн ({users.length}):</b>
        <ul>
          {
            users.map((name: string, index: string) => (
              <li key={`${name[1]}${index}`}>{name[1]}</li>
            ))
          }
        </ul>
      </div>
      <div className="chat-messages">
        <div ref={messagesRef} className="messages">
          {messages.map((message) => (
            <div className="message">
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </div>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            rows={3}
          >
          </textarea>
          <button onClick={onSendMessage} type="button" className="btn btn-primary">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export {
  Chat
};