import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Volume2 } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const [speaking, setSpeaking] = useState(false);

  const welcomeMessage = () => {
    const speech = new SpeechSynthesisUtterance(
      "Welcome to my portfolio. I am Methun. I am currently pursuing my third year of Bachelor of Engineering in Computer Science and Engineering. I am passionate about software engineering, data engineering, artificial intelligence, full stack development, and building innovative solutions for real world problems."
    );
    speech.rate = 0.85;
    speech.pitch = 0.9;
    setSpeaking(true);
    speech.onend = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  return (
    <section className="hero">
      <div className="three-background"><ParticleBackground /></div>
      <div className="hero-background" />

      <div className="hero-content">
        <motion.div className="small-heading" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>
          BUILDING SOLUTIONS
        </motion.div>
        <motion.div className="small-heading red" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          ENGINEERING THE FUTURE
        </motion.div>

        <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
          METHUN
        </motion.h1>

        <h2>SOFTWARE <span>ENGINEER</span></h2>

        <p className="hero-description">
          BE CSE • DATA ENGINEERING • AI • FULL STACK DEVELOPMENT
        </p>

        <div className="hero-buttons">
          <button className="red-button" onClick={welcomeMessage}>
            <Volume2 size={18} />
            {speaking ? "Speaking..." : "Listen to my story"}
          </button>

          <button className="outline-button" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
            Explore My Work
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="red-glow" />
        <img src="/images/methun.png" className="hero-image" alt="Methun" />
      </div>

      <div className="hero-side-text left">CODE.<br />BUILD.<br /><span>INNOVATE.</span><br />REPEAT.</div>
      <div className="hero-side-text right">DATA DRIVEN<br /><span>DECISIONS</span></div>

      <div className="scroll-indicator">
        <ArrowDown />
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}