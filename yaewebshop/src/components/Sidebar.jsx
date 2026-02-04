import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  // Match your original nav differences:
  // - Login page: only Home + Login
  // - Signup page: Home + Login
  // - Profile page: Home + Profile
  // - Payment page: Cart only
  // - Confirmation page: no sidebar (handled in Layout)
  if (pathname === "/payment") {
    return (
      <nav className="sidebar">
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    );
  }

  if (pathname === "/login") {
    return (
      <nav className="sidebar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    );
  }

  if (pathname === "/signup") {
    return (
      <nav className="sidebar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    );
  }

  if (pathname === "/profile") {
    return (
      <nav className="sidebar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    );
  }

  return (
    <nav className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
