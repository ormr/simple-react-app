import React, { useState } from 'react';
import axios from 'axios';
import { socket } from '../../socket';

interface Props {
  onLogin: () => any;
}

const JoinBlock: React.FC<any> = ({ onLogin }: any): JSX.Element => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onEnter = async (): Promise<void> => {
    if (!(roomId.length > 0 && roomId.length < 10) || !userName) {
      return alert('Wrong credentials');
    }
    setLoading(true);

    const data = {
      roomId,
      userName
    }

    await axios.post('/rooms', data);
    await onLogin(data);
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
      <button disabled={isLoading ? true : false} className="btn btn-success" onClick={onEnter}>
        {isLoading ? 'Вход...': 'Войти'}
      </button>
    </div>
  );
};

export { JoinBlock };