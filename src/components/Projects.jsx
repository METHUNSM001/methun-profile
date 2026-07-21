import React from "react";
import { motion } from "framer-motion";

const projects = [
  ["GREEN IDEA", "An AgriTech platform connecting farmers, transporters, shopkeepers and consumers.", "React Native • Python • MySQL • AI"],
  ["MONTFOR SCHOOL ERP SYSTEM", "Manage student and school records and details.", "React.JS• Python • EXCEL"],
  ["CRYPTO DATA PIPELINE", "ETL pipeline that collects, transforms and visualizes cryptocurrency data.", "Python • MySQL • Streamlit"],
  ["WEATHER AI", "Weather intelligence application using live weather data and AI generated insights.", "React • OpenWeather API • Groq AI"]
];

export default function Projects() {
  return (
    <section className="section projects-section">
      <div className="section-label">03 / PROJECTS</div>
      <h2>THINGS I <span>BUILD.</span></h2>
      <div className="projects-grid">
        {projects.map(([title, description, technologies], index) => (
          <motion.div className="project-card" key={title} whileHover={{ y: -15 }}>
            <div className="project-number">0{index + 1}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <small>{technologies}</small>
            <button>VIEW PROJECT →</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}