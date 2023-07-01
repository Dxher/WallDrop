import { Link } from "react-router-dom";

const WallpaperList = ({wallpapers, title}) => {

    return ( 
<div className="wallpaper-list">
  <h2>{title}</h2>
  <div className="wallpapers">
    {wallpapers.map((wallpaper) => (
      <div className="wallpaper-card" key={wallpaper.id}>
        <Link to={'/wallpapers/' + wallpaper.id}>
          <img className="wallpaper-image" src={wallpaper.photo} alt={wallpaper.title} />
          <div className="wallpaper-info">
            <h3 className="wallpaper-title">{wallpaper.title}</h3>
            <p className="wallpaper-owner">Made by {wallpaper.owner}</p>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>

     );
}
 
export default WallpaperList;