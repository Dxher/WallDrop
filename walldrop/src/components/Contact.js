import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic here
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-social">
          {/* Add your social media images here */}
          <a href="https://www.facebook.com/">
            <img src='./assets/facebook.png' alt="Social Media 1" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="./assets/instagram.png" alt="Social Media 2" />
          </a>
          <a href="https://twitter.com/login">
            <img src="./assets/twitter.png" alt="Social Media 3" />
          </a>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
