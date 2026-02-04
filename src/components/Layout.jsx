import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  const isConfirmation = pathname === "/confirmation";

  return (
    <>
      {/* confirmation.html originally had NO theme button */}
      <Header showToggle={!isConfirmation} />

      <div className="container">
        {!isConfirmation && <Sidebar />}

        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
