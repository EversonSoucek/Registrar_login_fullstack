import React, { useState } from 'react';
import Axios from 'axios'
import './App.css';



function App() {
  const [userNameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const register = () => {
    Axios.post('http://localhost:3002/register', {
      username: userNameReg,
      password: passwordReg
    }).then((response) => console.log(response))
  }

  const login = () => {
    Axios.post('http://localhost:3002/login', {
      username: username,
      password: password
    }).then((response) => {
      if (response.data.message) { setLoginStatus(response.data.message) } else {
        setLoginStatus(response.data[0].username)
      }
    })
  }

  return (
    <div className="App">
      <div className='registrar'>
        <h1>Registrar</h1>
        <label>Usuario</label>
        <input type='text' onChange={(event) => setUsernameReg(event.target.value)} />
        <label>Senha</label>
        <input type='text' onChange={(event) => setPasswordReg(event.target.value)} />
        <button onClick={register}>Registrar</button>
      </div>
      <div className='login'>
        <h1>login</h1>
        <label>Usuario</label>
        <input type='text' placeholder='Usuario' onChange={(event) => setUsername(event.target.value)} />
        <label>Senha</label>
        <input type='text' placeholder='Senha' onChange={(event) => setPassword(event.target.value)} />
        <button onClick={login}>Registrar</button>
      </div>

      <h1>{loginStatus}</h1>

    </div>
  );
}

export default App;
