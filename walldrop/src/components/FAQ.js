import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>{t('faq.title')}</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeItem === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
