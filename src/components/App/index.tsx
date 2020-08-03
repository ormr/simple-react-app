import React from 'react';
import io from 'socket.io-client';
import './App.css';
import { JoinBlock } from '../JoinBlock';
import { socket } from '../../socket';

const App: React.FC = () => {

  return (
    <div className="wrapper">
      <JoinBlock />
    </div>
  );
}

export {
  App
};