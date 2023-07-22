import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <h2>{t('notFound.title')}</h2>
      <p>{t('notFound.message')}</p>
    </div>
  );
};

export default NotFound;
