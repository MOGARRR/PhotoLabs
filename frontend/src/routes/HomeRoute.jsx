import "../styles/HomeRoute.scss";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";
import { use, useEffect } from "react";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    updateToFavPhotoIds,
    notifactionStatus,
    setPhotoSelected,
    likePhotoArray,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} notifactionStatus={notifactionStatus} />
      <PhotoList
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        likePhotoArray={likePhotoArray}
      />
    </div>
  );
};

export default HomeRoute;

// state dups
