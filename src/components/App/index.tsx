import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
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

  const onLogin = async (object: IData): Promise<void> => {
    dispatch({
      type: 'JOINED',
      payload: object
    });

    socket.emit('ROOM:JOIN', object);
    const { data }: AxiosResponse<any> = await axios.get(`/rooms/${object.roomId}`);
    setUsers(data.users);
  }

  const setUsers = (users: any): void => {
    dispatch({
      type: 'SET_USERS',
      payload: users
    });
  };

  const addMessage = (message: any): void => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message
    });
  }

  useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', addMessage)
  }, []);


  return (
    <div className="wrapper">
      {!state.joined ? <JoinBlock onLogin={onLogin}/> : <Chat {...state} onAddMessage={addMessage}/>}
    </div>
  );
}

export {
  App
};