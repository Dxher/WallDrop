import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  // Background animation using react-spring
  const backgroundAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(1.1)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
  });

  // Content animation using react-spring
  const contentAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,
  });

  return (
    <section className="home">
      {/* Background animation */}
      <animated.div className="background-animation" style={backgroundAnimation} />

      {/* Content */}
      <animated.div className="content" style={contentAnimation}>
        <h1>Find the perfect wallpaper for your background!</h1>
        <Link to="/#/explore">
          <button>Explore</button>
        </Link>
      </animated.div>
    </section>
  );
};

export default Home;
