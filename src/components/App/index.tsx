import React, { useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import { JoinBlock } from '../JoinBlock';
import { Chat } from '../Chat';
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

  useEffect(() => {
    socket.on('ROOM:JOINED', (users: any) => {
      console.log(users);
      dispatch({
        type: 'SET_USERS',
        payload: users
      })
    })
  }, [])

  return (
    <div className="wrapper">
      {!state.joined ? <JoinBlock onLogin={onLogin}/> : <Chat {...state}/>}
    </div>
  );
}

export {
  App
};