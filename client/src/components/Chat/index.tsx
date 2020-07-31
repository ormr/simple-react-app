import React, { useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

// const socket = io.connect('http://localhost:5000');

interface IChat {
  msg: string;
  chat: {
    id: string;
    msg: string;
  }[];
}

const initialState: IChat = {
  msg: '',
  chat: []
};


let socket: typeof Socket;

const Chat: React.FC = () => {

  const ENDPOINT: string = 'http://localhost:5000';

  const [messages, setMessages] = useState(initialState);

  console.log(messages);

  useEffect(() => {
    socket = io(ENDPOINT);
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('chat message', ({ id, msg }: { id: string, msg: string }) => {
      setMessages({
        ...messages,
        chat: [...messages.chat, { id, msg }]
      });
    });
  }, []);

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessages({
      ...messages,
      msg: e.target.value
    });
  };

  const onMessageSubmit = (): void => {
    socket.emit('chat message', messages.msg);
    setMessages({
      ...messages,
      msg: ''
    });
  };

  const renderChat = (): JSX.Element[] => {
    const { chat } = messages;

    return chat.map(({ id, msg }, idx) => (
      <div key={idx}>
        <span>{id}: </span>
        <span>{msg}</span>
      </div>
    ));
  };

  return (
    <>
    <div className="chat-messages">{renderChat()}</div>
    <div className="chat-footer">
      <textarea
        onChange={(e) => onTextChange(e)}
        value={messages.msg}
      ></textarea>
      <button onClick={onMessageSubmit}>Send</button>
    </div>
    </>
  );
};

export { Chat };