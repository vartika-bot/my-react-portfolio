import React from 'react';
import './Header.css'; // Optional CSS file

const Header = () => {
  return (
    <header className="header">
      <h1>Hi, I'm Vartika Singh </h1>
      <p>A Software Developer passionate about creating impactful solutions.</p>
      <div className="links">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="/projects">Projects</a>
        <a href="https://www.linkedin.com/in/matthew" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
};

export default Header;