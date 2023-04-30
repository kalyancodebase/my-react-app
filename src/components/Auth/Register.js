import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

async function handleSubmit(e) {
   e.preventDefault();
   console.log({ username, email, password });
   try {
    await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' }
    })
    
   } catch (error) {
    console.log(error);
   }
}

    return(
        <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>email:</label>
        <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>password:</label>
        <input type="password" name="password" placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)}  />
        <button type="Submit" >Submit</button>
        </form>
        <a>
            <Link to="/login" >Login</Link>
        </a>
        </div>
    )
}

export default Register;