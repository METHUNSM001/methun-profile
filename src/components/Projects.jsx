import React from "react";
import { motion } from "framer-motion";

const projects = [
  [
    "GREEN IDEA",
    "An AgriTech platform connecting farmers, transporters, shopkeepers and consumers.",
    "React Native • Python • MySQL • AI",
    null
  ],
  [
    "MONTFORT SCHOOL ERP SYSTEM",
    "Manage student and school records and details.",
    "HTML,CSS,JS • Python • EXCEL",
    "https://montfort-school.onrender.com/admin"
  ],
  [
    "CRYPTO DATA PIPELINE",
    "ETL pipeline that collects, transforms and visualizes cryptocurrency data.",
    "Python • MySQL • Streamlit",
    null
  ],
  [
    "WEATHER AI",
    "Weather intelligence application using live weather data and AI generated insights.",
    "React • OpenWeather API • Groq AI",
    null
  ]
];

export default function Projects() {
  return (
    <section className="section projects-section">
      <div className="section-label">03 / PROJECTS</div>

      <h2>
        THINGS I <span>BUILD.</span>
      </h2>

      <div className="projects-grid">
        {projects.map(([title, description, technologies, link], index) => (
          <motion.div
            className="project-card"
            key={title}
            whileHover={{ y: -15 }}
          >
            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            <small>{technologies}</small>

            <button
              onClick={() => {
                if (link) {
                  window.open(link, "_blank");
                } else {
                  alert("Project link will be added soon!");
                }
              }}
            >
              VIEW PROJECT →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}