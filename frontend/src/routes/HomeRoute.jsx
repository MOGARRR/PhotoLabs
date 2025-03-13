import "../styles/HomeRoute.scss";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    updateToFavPhotoIds,
    notifactionStatus,
    setPhotoSelected,
    likePhotoArray,
    setTopicId,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        notifactionStatus={notifactionStatus}
        setTopicId={setTopicId}
      />
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
