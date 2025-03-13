import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon";

const PhotoFavButton = (props) => {
  const {
    id,
    updateToFavPhotoIds,
    likePhotoArray
  } = props;

  return (
    <div
      className="photo-list__fav-icon "
      onClick={() => {
        updateToFavPhotoIds(id);
      }}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={likePhotoArray.includes(id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
