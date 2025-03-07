import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const {topics, photos, addPhotoToArray, notifactionStatus, toggleModalDisplay} = props;
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
