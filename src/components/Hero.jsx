import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Volume2 } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const [speaking, setSpeaking] = useState(false);

  const welcomeMessage = () => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
      "Welcome to my portfolio. I am Methun. I am currently pursuing my third year of Bachelor of Engineering in Computer Science and Engineering. I am passionate about software engineering, data engineering, artificial intelligence, full stack development, and building innovative solutions for real world problems."
    );

    speech.rate = 0.85;
    speech.pitch = 0.75;
    speech.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    /*
      Try to select a male English voice.
      Voice names depend on the browser and operating system.
    */

    const maleVoiceKeywords = [
      "male",
      "david",
      "mark",
      "daniel",
      "alex",
      "george",
      "james",
      "ravi",
      "english india",
      "en-in"
    ];

    const maleVoice = voices.find((voice) => {
      const voiceName = voice.name.toLowerCase();
      const language = voice.lang.toLowerCase();

      return (
        (language.startsWith("en") || language.includes("in")) &&
        maleVoiceKeywords.some((keyword) =>
          voiceName.includes(keyword)
        )
      );
    });

    const englishVoice = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith("en")
    );

    speech.voice = maleVoice || englishVoice || voices[0];

    speech.onstart = () => {
      setSpeaking(true);
    };

    speech.onend = () => {
      setSpeaking(false);
    };

    speech.onerror = () => {
      setSpeaking(false);
    };

    window.speechSynthesis.speak(speech);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="hero">

      {/* 3D Particle Background */}
      <div className="three-background">
        <ParticleBackground />
      </div>

      {/* Background Glow */}
      <div className="hero-background"></div>

      {/* Main Hero Content */}
      <div className="hero-content">

        <motion.div
          className="small-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BUILDING SOLUTIONS
        </motion.div>

        <motion.div
          className="small-heading red"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ENGINEERING THE FUTURE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          METHUN
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          SOFTWARE <span>ENGINEER</span>
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          BE CSE • DATA ENGINEERING • AI • FULL STACK DEVELOPMENT
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >

          <button
            className="red-button"
            onClick={welcomeMessage}
          >
            <Volume2 size={18} />

            {speaking
              ? "Speaking..."
              : "Listen to my story"}
          </button>

          <button
            className="outline-button"
            onClick={scrollToProjects}
          >
            Explore My Work
          </button>

        </motion.div>

      </div>

      {/* Hero Image */}
      <div className="hero-image-container">

        <div className="red-glow"></div>

        <img
          src="/images/methun.png"
          className="hero-image"
          alt="Methun"
        />

      </div>

      {/* Side Text */}
      <div className="hero-side-text left">
        CODE.
        <br />
        BUILD.
        <br />
        <span>INNOVATE.</span>
        <br />
        REPEAT.
      </div>

      <div className="hero-side-text right">
        DATA DRIVEN
        <br />
        <span>DECISIONS</span>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <ArrowDown />
        SCROLL TO EXPLORE
      </div>

    </section>
  );
}