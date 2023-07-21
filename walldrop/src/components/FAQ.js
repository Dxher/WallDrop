import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'How do I upload a photo',
      answer:
        'Once you sign in, you can find an upload button at the top right of the page. Once there, feel free to drag and drop an image or click on the button to select an image from your device. Then, simply fill in the details, publish then voila! Your art is accessible to everyone :) ',
    },
    {
      question: 'Can I delete something I posted',
      answer:
        'For sure! Just head into your gallery and select the desired image to remove. The delete button should be right next to the download button.',
    },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
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
