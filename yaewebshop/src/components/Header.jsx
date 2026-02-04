import React, { useEffect, useState } from "react";

export default function Header({ showToggle = true }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      setIsLight(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
    const nowLight = document.body.classList.contains("light-theme");
    setIsLight(nowLight);
    localStorage.setItem("theme", nowLight ? "light" : "dark");
  };

  return (
    <header>
      <img src="logo.png" alt="IKUY Logo" className="logo" />
      <h1 style={{ marginBottom: 0 }}>IKUY CLOTHING</h1>

      {showToggle && (
        <button className="theme-button" onClick={toggleTheme}>
          Switch Theme
        </button>
      )}
    </header>
  );
}
