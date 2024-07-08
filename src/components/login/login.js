import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Example credentials
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
      login();
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Sign In</h1>
                <p>Please enter your login details to access your account.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <form className="row" id="contact-form">
            <div className="col-md-6 col-sm-12">

              {error && <p className="error">{error}</p>}
              <div className="block">
                <div className="form-group">
                  <input name="user_name" type="text" className="form-control" placeholder="Email or Phone"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <input name="password" type="password" className="form-control" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-default" type="button" onClick={handleLogin}>Login</button>
              </div>

              {/* <button onClick={handleLogin}>Login</button> */}
            </div>
          </form>
        </div>      
      </section>
    </div>
  );
};

export default Login;
