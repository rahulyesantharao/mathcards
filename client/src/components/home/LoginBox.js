import React from 'react';
import LoginForm from './LoginForm';

const LoginBox = () => {
  return(
    <div className="loginBox">
      <div className="card">
        <h1 className="is-centered">Login</h1>
        <LoginForm/>
      </div>
    </div>
  );
}

export default LoginBox;
