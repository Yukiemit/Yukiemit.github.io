import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h2>Login</h2>

      <form className="contact-form">
        <label>Email Address</label>
        <input type="email" placeholder="user@email.com" required />

        <label>Password</label>
        <input type="password" placeholder="********" required />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: 20 }}>
        Don’t have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </>
  );
}
