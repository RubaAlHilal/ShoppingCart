import React, { useState } from "react";
import user from "./userData"

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    if (email === user.email && password === user.password) {
      onLogin(user);     } else {
      setError("wrong email or password");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-danger mb-3">{error}</div>}

        <button type="submit" className="btn btn-primary">login</button>
      </form>
    </div>
  );
}

export default Login;
