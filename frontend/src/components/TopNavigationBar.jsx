import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigation = (props) => {
  const {topics,notifaction} = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavIcon displayAlert={notifaction} selected={true}/>
    </div>
  )
};

export default TopNavigation;
