import React from "react";

export default function Experience() {
  return (
    <section className="section experience-section">
      <div className="section-label">05 / JOURNEY</div>
      <h2>MY <span>EXPERIENCE.</span></h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div>
            <span>15 Dec 2025 - 03 Jan 2026</span>
            <h3>Web Development Intern</h3>
            <p>Assisted in developing and maintaining web applications using modern technologies(react.js).</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div>
            <span>18 Jun 2026 — 28 Jun 2026</span>
            <h3>DATA ENGINEERING INTERN JOURNEY</h3>
            <p>Building data pipelines using Python,SQL,Spark,Streamlit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}