import React from 'react';
import WallpaperList from './WallpaperList';
import useFetch from './useFetch';
import Filter from '../Filter/Filter';
import { useState } from 'react';

const Explore = () => {
  const [filterValue, setFilterValue] = useState(null); 

  const { data: wallpapers, isPending, error } = useFetch('https://walldrop-backend.onrender.com/wallpapers');

  const handleFilterChange = (selectedValue) => {
    setFilterValue(selectedValue);
  };

  const filteredWallpapers = wallpapers && wallpapers.filter((wallpaper) => {
    if (filterValue === null || filterValue === 'all') return true;
    return wallpaper.genre === filterValue;
  });

  const title = filterValue && filterValue !== 'all' ? `${filterValue}` : 'All';

  return (
    <div className="explore">
      <Filter onFilterChange={handleFilterChange} />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {filteredWallpapers && <WallpaperList wallpapers={filteredWallpapers} title={title} />}
    </div>
  );
};

export default Explore;
