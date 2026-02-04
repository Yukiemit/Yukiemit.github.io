import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  if (pathname === "/confirmation") {
    return (
      <footer>
        <p>Thank you for shopping with IKUY CLOTHING!</p>
      </footer>
    );
  }

  if (pathname === "/cart") {
    return (
      <footer>
        <p>© 2026 ikuyclothing</p>
      </footer>
    );
  }

  if (pathname === "/products" || pathname === "/payment") {
    return (
      <footer>
        <p>© 2026 ikuyclothing</p>
      </footer>
    );
  }

  if (pathname === "/login" || pathname === "/signup" || pathname === "/profile") {
    return (
      <footer>
        <p>© 2026 ikuyclothing. All Rights Reserved.</p>
      </footer>
    );
  }

  return (
    <footer>
      <p>© 2026 ikuyclothing. All Rights Reserved.</p>
      <p>Email: support@ikuyclothing.com | Phone: 0912-345-6789</p>
    </footer>
  );
}
