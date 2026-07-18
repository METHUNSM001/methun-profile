import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill all fields before sending.");
      return;
    }

    const to = "smmethun2006@gmail.com";
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Use mailto: to open the user's email client with a prefilled message.
    // Note: this relies on the visitor's mail client — for automatic delivery
    // consider using a service like Formspree or EmailJS (instructions below).
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("Opening your email client to send the message...");
  };

  return (
    <section className="section contact-section">
      <div className="section-label">06 / CONTACT</div>
      <h2>LET'S BUILD <span>SOMETHING.</span></h2>
      <p>Have an idea? Let's turn it into something real.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="YOUR NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="YOUR EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="TELL ME ABOUT YOUR IDEA"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">SEND MESSAGE →</button>
      </form>

      {status && <p style={{ color: "#f55", marginTop: 10 }}>{status}</p>}

      <div className="social-links">
        <a href="https://github.com/METHUNSM001/" target="_blank" rel="noreferrer">GITHUB</a>
        <a href="https://www.linkedin.com/in/smmethun/" target="_blank" rel="noreferrer">LINKEDIN</a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM</a>
      </div>
    </section>
  );
}