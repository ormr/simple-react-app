import React, { useState, useEffect, useRef } from 'react';
import { socket } from '../../socket';
import {Message} from "../../constants";

interface Props {
  users: string[]
  messages: Message[]
  userName: string
  roomId: string
  onAddMessage: (props: Message) => void
}

const Chat: React.FC<Props> = ({ users, messages, userName = '', roomId, onAddMessage }: Props) => {
  const [messageValue, setMessageValue] = useState('');
  const messagesRef = useRef<any>(null);

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });

    onAddMessage({
      userName: userName,
      text: messageValue
    });
    setMessageValue('');
  };

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [ messages ])

  return (
    <div className="chat">
      <div className="chat-users">
        Комната: <b>{roomId}</b>
        <hr />
        <b>Онлайн ({users.length}):</b>
        <ul>
          {
            users.map((name: string, index: number) => (
              <li key={`${name}${index}`}>{name}</li>
            ))
          }
        </ul>
      </div>
      <div className="chat-messages">
        <div ref={messagesRef} className="messages">
          {
            messages.map((message: Message, index: number) => {
              const isYou = message.userName === userName;
              return (
                <div key={userName + index} className={isYou ? "message left" : "message"}>
                  <div className={isYou ? "left" : ""}>
                    <p>{message.text}</p>
                    <div>
                      <span>{message.userName}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
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