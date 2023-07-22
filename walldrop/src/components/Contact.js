import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formAnimation = useTrail(1, {
    opacity: isSubmitted ? 0 : 1,
    transform: isSubmitted ? 'translateY(50px)' : 'translateY(0)',
    delay: 500,
  });

  const messageAnimation = useTrail(1, {
    opacity: isSubmitted ? 1 : 0,
    transform: isSubmitted ? 'translateY(0)' : 'translateY(50px)',
    delay: 500,
  });

  return (
    <section className="contact">
      <h2>{t('contact.title')}</h2>
      <div className="contact-container">
        <div className="contact-social">
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
          <animated.form
            style={{
              opacity: formAnimation[0].opacity,
              transform: formAnimation[0].transform,
              position: isSubmitted ? 'absolute' : 'static',
            }}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">{t('contact.sendMessageButton')}</button>
          </animated.form>

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
                <h3>{t('contact.thankYouMessage')}</h3>
                <p>{t('contact.responseMessage')}</p>
              </div>
            )}
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
