// import PhotoListItem from './components/PhotoListItem';
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    toggleModal,
    likePhotoArray,
    modalDisplayData,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        notifactionStatus={likePhotoArray.length > 0}
        setPhotoSelected={setPhotoSelected}
        likePhotoArray={likePhotoArray}
      />

      {toggleModal && (
        <PhotoDetailsModal
          setPhotoSelected={setPhotoSelected}
          modalDisplayData={modalDisplayData}
          updateToFavPhotoIds={updateToFavPhotoIds}
          likePhotoArray={likePhotoArray}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;
