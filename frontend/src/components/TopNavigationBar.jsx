import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const {
    topics,
    notifactionStatus,
    setTopicId
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
      topics={topics}
      setTopicId={setTopicId}
      />
      <FavBadge isFavPhotoExist={notifactionStatus} />
    </div>
  );
};

export default TopNavigation;
