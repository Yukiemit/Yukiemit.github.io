import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      alert(`Thank you, ${name}! Your message has been received.`);
      setName("");
      setMessage("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />

        <label>Message</label>
        <textarea
          rows="5"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send Message</button>
      </form>
    </>
  );
}
