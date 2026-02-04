import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <h2>Create Account</h2>

      <form className="contact-form">
        <label>First Name</label>
        <input type="text" placeholder="Juan" required />

        <label>Last Name</label>
        <input type="text" placeholder="Dela Cruz" required />

        <label>Email Address</label>
        <input type="email" placeholder="user@email.com" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />

        <label>Mobile Number</label>
        <input type="tel" placeholder="09XXXXXXXXX" required />

        <label>Home Address</label>
        <textarea rows="3" placeholder="Complete home address" required />

        <button type="submit">Sign Up</button>
      </form>

      <p style={{ marginTop: 20 }}>
        Already have an account? <Link to="/login">Back to Login</Link>
      </p>
    </>
  );
}
