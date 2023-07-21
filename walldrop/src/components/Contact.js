import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Animation for the form
  const formAnimation = useTrail(1, {
    opacity: isSubmitted ? 0 : 1,
    transform: isSubmitted ? 'translateY(50px)' : 'translateY(0)',
    delay: 500,
  });

  // Animation for the thank you message
  const messageAnimation = useTrail(1, {
    opacity: isSubmitted ? 1 : 0,
    transform: isSubmitted ? 'translateY(0)' : 'translateY(50px)',
    delay: 500,
  });

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
          {/* Form */}
          <animated.form
            style={{
              opacity: formAnimation[0].opacity,
              transform: formAnimation[0].transform,
              position: isSubmitted ? 'absolute' : 'static',
            }}
            onSubmit={handleSubmit}
          >
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
          </animated.form>

          {/* Thank you message */}
          <animated.div
            style={{
              opacity: messageAnimation[0].opacity,
              transform: messageAnimation[0].transform,
              position: isSubmitted ? 'static' : 'absolute',
              width: '100%',
            }}
          >
            {isSubmitted && (
              <div>
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            )}
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
