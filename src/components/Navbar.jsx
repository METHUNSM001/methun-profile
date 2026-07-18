import React, { useState } from "react";
import { Menu, X, Volume2 } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Certificates", "Experience", "Contact"];

  const scrollTo = (name) => {
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const intro = () => {
    const text = "Welcome to my portfolio. I am Methun. I am currently pursuing my third year of Bachelor of Engineering in Computer Science and Engineering. I am passionate about software engineering, data engineering, artificial intelligence, full stack development, and building innovative solutions for real world problems.";
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.85;
    speech.pitch = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  return (
    <nav className="navbar">
      <button className="logo" onClick={() => scrollTo("Home") }>
        <span className="logo-icon">SM</span>
        <span className="logo-text">METHUN</span>
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {links.map((link) => (
          <button key={link} onClick={() => scrollTo(link)}>{link}</button>
        ))}
        <button className="nav-intro" onClick={intro}>
          <Volume2 size={15} /> INTRO
        </button>
      </div>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}