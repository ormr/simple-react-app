import React from 'react';
import io from 'socket.io-client';
import './App.css';
import { JoinBlock } from '../JoinBlock';
import { socket } from '../../socket';
import { initialState, reducer } from '../../reducer';


interface IData {
  roomId: string;
  userName: string;
}

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onLogin = (data: IData): void => {
    dispatch({
      type: 'JOINED',
      payload: data
    });
    socket.emit('ROOM:JOIN', data);
  }

  console.log(state);

  return (
    <div className="wrapper">
      {!state.joined && <JoinBlock onLogin={onLogin}/>}
    </div>
  );
}

export {
  App
};