// import PhotoListItem from './components/PhotoListItem';
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setTopicId,
    toggleDarkMode,
    dark,
  } = useApplicationData();

  const {
    likePhotoArray,
    toggleModal,
    modalDisplayData,
    photoData,
    topicData,
    darkModeStatus,
  } = state;

  
  return (
    <div className={`App ${dark}`}>
      <HomeRoute
        topics={topicData}
        photos={photoData}
        updateToFavPhotoIds={updateToFavPhotoIds}
        notifactionStatus={likePhotoArray.length > 0}
        setPhotoSelected={setPhotoSelected}
        likePhotoArray={likePhotoArray}
        setTopicId={setTopicId}
        toggleDarkMode={toggleDarkMode}
        dark={dark}
      />

      {toggleModal && (
        <PhotoDetailsModal
          setPhotoSelected={setPhotoSelected}
          modalDisplayData={modalDisplayData}
          updateToFavPhotoIds={updateToFavPhotoIds}
          likePhotoArray={likePhotoArray}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          dark={dark}
        />
      )}
    </div>
  );
};

export default App;
