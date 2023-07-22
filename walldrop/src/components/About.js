import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    console.log("test");
  };

  const scrollAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
  });

  return (
    <section className="about">
      <div className="about-content">
        <animated.h3 style={scrollAnimation}>
          {t('about.text1')}
        </animated.h3>
        <animated.h3 style={scrollAnimation}>
          {t('about.text2')}
        </animated.h3>
        <animated.h1 style={scrollAnimation}>
          {t('about.text3')}
        </animated.h1>
        <animated.h1 style={scrollAnimation}>
          {t('about.text4')}
        </animated.h1>
        <animated.h2 style={scrollAnimation}>
          {t('about.text5')}
        </animated.h2>
        <animated.h2 style={scrollAnimation}>
          {t('about.text6')}
        </animated.h2>
        <animated.a href='/#/join' style={scrollAnimation}>
          <animated.button onClick={handleClick} style={scrollAnimation}>
            {t('about.joinButton')}
          </animated.button>
        </animated.a>
      </div>
    </section>
  );
};

export default About;
