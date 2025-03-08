import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import { use, useEffect } from 'react';

const HomeRoute = (props) => {
  const {topics, photos, addPhotoToArray, notifactionStatus, toggleModalDisplay} = props;
  useEffect(() => {
    console.log(photos)
  })
  return (
    <div className="home-route">
            <TopNavigation 
            topics={topics}
            notifactionStatus={notifactionStatus}
            />
            <PhotoList 
            photos={photos}
            addPhotoToArray={addPhotoToArray}
            toggleModalDisplay={toggleModalDisplay}
            />
    </div>
  );
};

export default HomeRoute;
