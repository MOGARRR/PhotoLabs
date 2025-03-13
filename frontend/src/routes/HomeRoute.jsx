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
    toggleDarkMode,
    dark,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        notifactionStatus={notifactionStatus}
        setTopicId={setTopicId}
        toggleDarkMode={toggleDarkMode}
        dark={dark}
      />
      <PhotoList
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        likePhotoArray={likePhotoArray}
        dark={dark}
      />
    </div>
  );
};

export default HomeRoute;

// state dups
