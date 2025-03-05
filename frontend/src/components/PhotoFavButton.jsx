import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { use, useState } from 'react';

const PhotoFavButton = () => {
  const [likePhoto, setLikePhoto] = useState(false);
  const handleLikePhoto = () => setLikePhoto(!likePhoto);

  return (
    <div className="photo-list__fav-icon " onClick={handleLikePhoto}>
      <div className="photo-list__fav-icon-svg">
      {likePhoto && <FavIcon className='photo-list__fav-icon'/>}
      {!likePhoto && <FavIcon className='photo-list__fav-icon-svg'/>}
      </div>

    </div>
  );
};

export default PhotoFavButton;
