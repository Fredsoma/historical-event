import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={scrolled ? "scrolled" : ""}
    >
      <a
        href="#hero"
        className="visually-hidden focusable"
      >
        Skip to main content
      </a>
      <div className="container header-container">
        <h1 className="logo">
          <a href="#hero">Combahee Collective</a>
        </h1>
        <nav aria-label="Main Navigation">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#story">Story</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#sources">Sources</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
