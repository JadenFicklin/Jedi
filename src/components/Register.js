import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/register",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Hello! Whats your name brave one?</h1>
      <form onSubmit={handleSubmit}>
        <h2>create your character</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="passcode"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button>submit</button>
      </form>
    </>
  );
}

export default Register;
