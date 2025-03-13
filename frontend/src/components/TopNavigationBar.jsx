import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { useEffect } from "react";
import lightBlub from "../assets/light-bulb.svg"
import lightBlubDark from "../assets/light-bulb-dark.svg"


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

      <img
      className={`icon`}
      src={dark === "" ? lightBlub : lightBlubDark}
      alt="Light blub symbol"
      onClick={toggleDarkMode} />

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
