import React from 'react';

import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <section className="landing">
      <h1 className="landing-title">Чат</h1>
      <div className="landing-buttons">
        <Link to="/login">Войти</Link>
        <Link to="/register">Зарегистрироваться</Link>
      </div>
    </section>
  );
}

export {
  Landing
};