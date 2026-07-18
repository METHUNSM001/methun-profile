import React from "react";

const certificates = [
  ["NPTEL Online Certification", "Indian Institute of Technology Kanpur", "2025", "/images/NPTEL.png"],
  ["Project Presentation", "VELAMAL INSTITUTE OF TECHNOLOGY", "2025", "/images/vellamal.png"],
  ["24 hrs Hackathon", "ERODE SENGUNTHAR COLLEGE", "2026", "/images/erode sengunthar hackathon.png"]
];

export default function Certificates() {
  return (
    <section className="section certificates-section">
      <div className="section-label">04 / CERTIFICATES</div>
      <h2>PROOF OF <span>PROGRESS.</span></h2>
      <div className="certificates-grid">
        {certificates.map(([title, issuer, year, img]) => (
          <div className="certificate-card" key={title}>
            <div className={`certificate-circle ${img ? "with-image" : ""}`}>
              {img ? (
                <img src={img} alt={title} className="certificate-image" />
              ) : (
                "CERTIFIED"
              )}
            </div>
            <h3>{title}</h3>
            <p>{issuer}</p>
            <span>{year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}