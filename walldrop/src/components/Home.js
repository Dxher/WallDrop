import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const [animationsComplete, setAnimationsComplete] = useState(false);

  const backgroundAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(1.1)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
    onRest: () => setAnimationsComplete(true), 
  });

  const contentAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,
  });

  useEffect(() => {
    if (animationsComplete) {
      document.body.style.backgroundImage =
        'radial-gradient(circle, #880e4f 20%, #4a148c 100%)';
    }
  }, [animationsComplete]);

  return (
    <section className="home">
      <animated.div className="background-animation" style={backgroundAnimation} />

      <animated.div className="content" style={contentAnimation}>
        <h1>{t('home.title')}</h1>
        <Link to="/explore">
          <button>{t('home.exploreButton')}</button>
        </Link>
      </animated.div>
    </section>
  );
};

export default Home;
