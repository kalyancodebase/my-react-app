import { useState } from "react";
import { Await, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>email:</label>
        <input
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password:</label>
        <input
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit">Login</button>
        <br />
        <a>
          <Link to="/register">Register</Link>
        </a>
      </form>
    </div>
  );
};

export default Login;
