import React from 'react';
import WallpaperList from './WallpaperList';
import useFetch from './useFetch';
import Filter from '../Filter/Filter';
import { useState } from 'react';

const Explore = () => {
  const [filterValue, setFilterValue] = useState(null); // State to store the selected filter value

  const { data: wallpapers, isPending, error } = useFetch('http://localhost:3001/wallpapers');

  const handleFilterChange = (selectedValue) => {
    setFilterValue(selectedValue);
  };

  // Check if wallpapers data is available
  const filteredWallpapers = wallpapers && wallpapers.filter((wallpaper) => {
    if (filterValue === null || filterValue === 'all') return true;
    return wallpaper.genre === filterValue;
  });

  // Generate the title based on the selected filter
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
