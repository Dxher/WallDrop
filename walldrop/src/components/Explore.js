import React from 'react';
import WallpaperList from './WallpaperList';
import useFetch from './useFetch';
import Filter from '../Filter/Filter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Explore = () => {
  const { t } = useTranslation();
  const [filterValue, setFilterValue] = useState(null);

  const { data: wallpapers, isPending, error } = useFetch('https://walldrop-backend.onrender.com/wallpapers');

  const handleFilterChange = (selectedValue) => {
    setFilterValue(selectedValue);
  };

  const filteredWallpapers = wallpapers && wallpapers.filter((wallpaper) => {
    if (filterValue === null || filterValue === 'all') return true;
    return wallpaper.genre === filterValue;
  });

  const title = filterValue && filterValue !== 'all' ? `${filterValue}` : t('explore.all');

  return (
    <div className="explore">
      <h2>{t('explore.title')}</h2>
      <Filter onFilterChange={handleFilterChange} />
      {error && <div>{t('explore.error')}</div>}
      {isPending && <div>{t('explore.loading')}</div>}
      {filteredWallpapers && <WallpaperList wallpapers={filteredWallpapers} title={title} />}
    </div>
  );
};

export default Explore;
