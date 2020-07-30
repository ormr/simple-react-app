import React, { Fragment, useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

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

const Chat: React.FC = () => {

  const [messages, setMessages] = useState(initialState);

  useEffect(() => {
    socket.on('chat message', ({ id, msg }: { id: string, msg: string }) => {
      setMessages({
        ...messages,
        chat: [...messages.chat, { id, msg }]
      });
    });
  }, [ setMessages, messages ]);

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