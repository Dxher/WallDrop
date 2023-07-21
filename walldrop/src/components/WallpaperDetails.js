
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const WallpaperDetails = () => {

    const { id } = useParams();
    const { data: wallpaper, error, isPending } = useFetch('https://walldrop-backend.onrender.com/wallpapers/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('https://walldrop-backend.onrender.com/wallpapers/' + wallpaper.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/explore');
        })
    }

  const handleDownload = () => {
    fetch(wallpaper.photo)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = `.${wallpaper.photo}`;
        link.download = `${wallpaper.title}.jpg`;
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
      });
  };

    return ( 
        <div className="wallpaper-details">
            { isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            { wallpaper && (
                <article className="wallpaper-detail-card">
                    <div className="image-container">
                        <img src={"." + wallpaper.photo} alt={wallpaper.title} />
                    </div>
                    <div className="details-container">
                        <h2>{wallpaper.title}</h2>
                        <p>Publisher: {wallpaper.owner}</p>
                        <div>Made for: {wallpaper.genre}</div>
                        <div>{wallpaper.body}</div>
                        <button onClick={handleDownload}>Download</button>
                        {/*<button onClick={handleClick}>delete</button>*/}
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default WallpaperDetails;