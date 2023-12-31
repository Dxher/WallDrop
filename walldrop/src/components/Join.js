import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Join = () => {
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', { firstName, lastName, email, password });
    setIsSubmitted(true);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <div className="join-container">
        <h1>{t('join.title')}</h1>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="join-form">
            <div className="form-group">
              <label htmlFor="firstName">{t('join.firstNameLabel')}</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">{t('join.lastNameLabel')}</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('join.emailLabel')}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">{t('join.passwordLabel')}</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">{t('join.signUpButton')}</button>
          </form>
        ) : (
          <div className="join-form">
            <h2 style={{ color: '#666' }}>{t('join.accountNotCreated')}</h2>
            <p>{t('join.apologyMessage')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Join;
