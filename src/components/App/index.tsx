import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.css';
import { JoinBlock } from '../JoinBlock';
import { Chat } from '../Chat';
import { socket } from '../../socket';
import { initialState, reducer } from '../../reducer';
import { Message } from "../../constants";


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
    const { data }: AxiosResponse = await axios.get(`/rooms/${object.roomId}`);
    dispatch({
      type: 'SET_DATA',
      payload: data
    });
  }

  const setUsers = (users: string[]): void => {
    dispatch({
      type: 'SET_USERS',
      payload: users
    });
  };

  const addMessage = (message: Message): void => {
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