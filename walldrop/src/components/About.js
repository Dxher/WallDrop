import React from 'react';

const About = () => {
  const handleClick = () => {
    console.log("test");
  };

  return (
    <section className="home">
      <h3>At WallDrop, we aim to provide a safe space to share your passion!</h3>
      <h3>We aim to provide quality products while giving artists an opportunity!</h3>
      <h1>500+ contributing artists!</h1>
      <h1>5000+ downloads!</h1>
      <h2>Ready to join the family?</h2>
      <h2>Make an account now!</h2>
      <a href='/Join'><button onClick={handleClick}>Join</button></a>
    </section>
  );
};

export default About;
