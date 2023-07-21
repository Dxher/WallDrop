import React from 'react';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const handleClick = () => {
    console.log("test");
  };

  // Scroll animation using react-spring
  const scrollAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
  });

  return (
    <section className="about">
      <div className="about-content">
        <animated.h3 style={scrollAnimation}>
          At WallDrop, we aim to provide a safe space to share your passion!
        </animated.h3>
        <animated.h3 style={scrollAnimation}>
          We aim to provide quality products while giving artists an opportunity!
        </animated.h3>
        <animated.h1 style={scrollAnimation}>
          500+ contributing artists!
        </animated.h1>
        <animated.h1 style={scrollAnimation}>
          5000+ downloads!
        </animated.h1>
        <animated.h2 style={scrollAnimation}>
          Ready to join the family?
        </animated.h2>
        <animated.h2 style={scrollAnimation}>
          Make an account now!
        </animated.h2>
        <animated.a href='/Join' style={scrollAnimation}>
          <animated.button onClick={handleClick} style={scrollAnimation}>
            Join
          </animated.button>
        </animated.a>
      </div>
    </section>
  );
};

export default About;
