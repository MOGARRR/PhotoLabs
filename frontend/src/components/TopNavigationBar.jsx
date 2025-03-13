import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { useEffect } from "react";


const TopNavigation = (props) => {
  const {
    topics,
    notifactionStatus,
    setTopicId,
    toggleDarkMode,
    dark,
  } = props;


  return (
    <div className="top-nav-bar ">
      <span className={`top-nav-bar__logo ${dark}`}>PhotoLabs</span>
      <i className={`icon`} onClick={toggleDarkMode}>💡</i>
      <TopicList
      topics={topics}
      setTopicId={setTopicId}
      dark={dark}
      />
      <FavBadge isFavPhotoExist={notifactionStatus} />
    </div>
  );
};

export default TopNavigation;
