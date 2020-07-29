import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="register">
      <form className="register-form">
        <h1>Регистрация</h1>
        <div className="form-group">
          <input type="text" id="username" className="register-username" placeholder="Username" />
          <label htmlFor="username">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use xlinkHref="#user" />
            </svg>
          </label>
        </div>
        <div className="form-group">
          <input type="email" id="email" className="register-email" placeholder="E-mail" />
          <label htmlFor="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use xlinkHref="#email-icon" />
            </svg>
          </label>
        </div>
        <div className="form-group">
          <input type="password" id="password" className="register-password" placeholder="Password" autoComplete="on"/>
          <label htmlFor="password">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use xlinkHref="#padlock" />
            </svg>
          </label>
        </div>
        <div className="form-group">
          <input type="password" id="password2" className="register-password" placeholder="Confirm password" autoComplete="on"/>
          <label htmlFor="password2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use xlinkHref="#padlock" />
            </svg>
          </label>
        </div>
        <div className="form-group">
          <input type="submit" className="register-submit" value="Log in" />
        </div>
      </form>
      <svg>
        <symbol id="user" viewBox="0 0 1792 1792">
          <path d="M1329 784q47 14 89.5 38t89 73 79.5 115.5 55 172 22 236.5q0 154-100 263.5t-241 109.5h-854q-141 0-241-109.5t-100-263.5q0-131 22-236.5t55-172 79.5-115.5 89-73 89.5-38q-79-125-79-272 0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5 198.5 40.5 163.5 109.5 109.5 163.5 40.5 198.5q0 147-79 272zm-433-656q-159 0-271.5 112.5t-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5-112.5-271.5-271.5-112.5zm427 1536q88 0 150.5-71.5t62.5-173.5q0-239-78.5-377t-225.5-145q-145 127-336 127t-336-127q-147 7-225.5 145t-78.5 377q0 102 62.5 173.5t150.5 71.5h854z" />
        </symbol>
        <symbol id="padlock" viewBox="0 0 1792 1792">
          <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
        </symbol>
        <symbol id="email-icon" viewBox="0 0 1000 1000">
          <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
            <path d="M1232.5,3694.7c-465.2-26.9-813.1-253.7-1016.8-665.1c-123-248-119.2-107.6-113.4-2979.4l5.8-2610.3l51.9-144.2c124.9-340.2,403.7-617,742-734.3l128.8-44.2h3979h3979l132.6,51.9c349.8,142.2,601.6,397.9,726.6,745.8l44.2,125l5.8,2610.3c5.8,2871.8,9.6,2733.4-113.4,2983.3c-155.7,317.2-438.3,545.9-782.3,634.3c-109.6,28.8-486.3,32.7-3844.4,34.6C3110.5,3704.3,1344,3700.4,1232.5,3694.7z M8419.6,2779.7c-1.9-26.9-3337-2379.7-3367.7-2377.8C5025,403.9,1886,2766.2,1886,2785.5c0,3.8,1470.5,7.7,3267.7,7.7C6951,2793.2,8421.5,2787.4,8419.6,2779.7z M3024,765.2C4121.6-65.2,5026.9-743.7,5036.5-743.7c11.5,0,899.6,626.7,1976,1389.8l1956.8,1391.7l5.8-2222.1c3.8-2122.1,1.9-2224-30.8-2268.2c-19.2-26.9-59.6-65.4-88.4-86.5l-51.9-40.4H5000H1196l-51.9,40.4c-28.8,21.1-71.1,63.4-92.3,92.3c-40.4,51.9-40.4,63.4-46.1,2387.4c-1.9,1284,1.9,2333.6,9.6,2333.6C1024.9,2274.2,1928.3,1595.6,3024,765.2z" />
          </g>
        </symbol>
      </svg>
    </div >
  );
}

export {
  Register
};