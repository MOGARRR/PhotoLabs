// import FavIcon from './FavIcon';

import '../styles/PhotoFavButton.scss';
import { useEffect, useState } from 'react';
import FavIcon from './FavIcon';

const PhotoFavButton = (props) => {
const {addPhotoToArray, id} = props;
  const [likePhoto, setLikePhoto] = useState(false);
  
  const handleLikePhoto = () => {
    setLikePhoto(!likePhoto);
    addPhotoToArray(id);
  }
  

  return (
    <div className="photo-list__fav-icon " onClick={handleLikePhoto}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={likePhoto}/>
      </div>

    </div>
  );
};

export default PhotoFavButton;
