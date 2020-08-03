import React, { useState } from "react";
import axios from 'axios'
import { socket } from "../../socket";

const JoinBlock: React.FC = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const onEnter = (): void => {
    if (!(roomId.length > 0 && roomId.length < 10) || !userName) {
      return alert('Wrong credentials')
    }
    axios.post('/rooms', {
      roomId,
      userName
    });
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRoomId(e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserName(e.target.value)
        }
      />
      <button className="btn btn-success" onClick={() => onEnter()}>
        Войти
      </button>
    </div>
  );
};

export { JoinBlock };
