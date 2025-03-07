import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const {topics, photos, addPhotoToArray, notifaction} = props;
  return (
    <div className="home-route">
            <TopNavigation 
            topics={topics}
            notifaction={notifaction}
            />
            <PhotoList 
            photos={photos}
            addPhotoToArray={addPhotoToArray}
            />
    </div>
  );
};

export default HomeRoute;
