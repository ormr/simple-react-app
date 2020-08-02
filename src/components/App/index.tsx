import React from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000');

const App: React.FC = () => {
  return (
    <div>App</div>
  );
}

export {
  App
};