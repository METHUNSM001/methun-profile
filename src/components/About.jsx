import React from "react";

export default function About() {
  return (
    <section className="section about-section">
      <div className="section-label">01 / ABOUT ME</div>
      <div className="about-grid">
        <div><h2>I BUILD <span>DIGITAL FUTURES.</span></h2></div>
        <div className="about-text">
          <p>I am Methun, a passionate Computer Science and Engineering student currently pursuing my 3rd year of BE CSE.</p>
          <p>I am passionate about building intelligent systems that combine software engineering, database management and real-world problem solving.</p>
          <p>My goal is to create technology that is not only technically powerful but also useful for society.</p>
          <div className="stats">
            <div><strong>2+</strong><span>Years Learning</span></div>
            <div><strong>5+</strong><span>Projects</span></div>
            <div><strong>∞</strong><span>Ideas</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}