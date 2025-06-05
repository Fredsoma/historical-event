import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="container footer-container">
      <p>
        &copy; 2025 Hackstory Submission by  Fred Soma.
      </p>
      <div className="social-links">
        <a
          href="https://github.com/Fredsoma?page=1&tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy on Vercel
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
