import "../styles/HomeRoute.scss";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";
import { use, useEffect } from "react";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    addPhotoToArray,
    notifactionStatus,
    toggleModalDisplay,
    likePhotoArray,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} notifactionStatus={notifactionStatus} />
      <PhotoList
        photos={photos}
        addPhotoToArray={addPhotoToArray}
        toggleModalDisplay={toggleModalDisplay}
        likePhotoArray={likePhotoArray}
      />
    </div>
  );
};

export default HomeRoute;

// state dups
