import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
            <TopNavigation/>
            <PhotoList/>
    </div>
  );
};

export default HomeRoute;
