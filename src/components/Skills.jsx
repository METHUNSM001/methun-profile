import React from "react";
import { motion } from "framer-motion";

const skills = [
  ["Python", "90%", "Programming"],
  ["React", "85%", "Frontend"],
  ["MySQL", "85%", "Database"],
];

export default function Skills() {
  return (
    <section className="section skills-section">
      <div className="section-label">02 / SKILLS</div>
      <h2>MY <span>ARSENAL</span></h2>
      <div className="skills-grid">
        {skills.map(([name, level, category], index) => (
          <motion.div className="skill-card" key={name} whileHover={{ scale: 1.05, rotateY: 10 }}>
            <div className="skill-number">0{index + 1}</div>
            <h3>{name}</h3>
            <p>{category}</p>
            <div className="skill-bar"><div style={{ width: level }} /></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}