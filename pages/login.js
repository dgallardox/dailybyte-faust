import { useState } from "react";
import { Layout } from "../components";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(props)

  return (
    <>
      <Layout>
        <h2>Login</h2>
        <form /* onSubmit={handleSubmit} */>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </Layout>
    </>
  );
}