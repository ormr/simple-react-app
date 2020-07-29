import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from './components/Landing';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <main className="main">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
      </Router>
    </div>    
  );
}

export {
  App
}