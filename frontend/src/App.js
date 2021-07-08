import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [data, setData] = useState({});

  const register = (e) => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => console.log(res));
  };

  const login = (e) => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) => console.log(res));
  };

  const getUser = (e) => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button className="Button--register" onClick={register}>
          Submit
        </button>
      </div>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setloginUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setloginPassword(e.target.value)}
        />
        <button className="Button--login" onClick={login}>
          Submit
        </button>
      </div>
      <div>
        <h1>Get User</h1>
        <button className="Button--user" onClick={getUser}>
          Submit
        </button>
        {data.username ? (
          <h3 className="Welcome">Welcome Back, {data.username}!</h3>
        ) : null}
      </div>
    </div>
  );
}

export default App;
