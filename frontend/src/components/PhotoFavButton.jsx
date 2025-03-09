// import FavIcon from './FavIcon';

import "../styles/PhotoFavButton.scss";
import { useEffect, useState } from "react";
import FavIcon from "./FavIcon";

const PhotoFavButton = (props) => {
  const { id, updateToFavPhotoIds, likePhotoArray } = props;
 
  const handleLikePhoto = () => {
    updateToFavPhotoIds(id);
  };

  return (
    <div
      className="photo-list__fav-icon "
      onClick={() => {
        handleLikePhoto();
      }}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={likePhotoArray.includes(id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
