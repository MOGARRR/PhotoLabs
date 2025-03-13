// import PhotoListItem from './components/PhotoListItem';
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import {useApplicationData} from "./hooks/useApplicationData";
import { useEffect } from "react";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setTopicId,
  } = useApplicationData();



  const {likePhotoArray,toggleModal, modalDisplayData, photoData, topicData} = state;

  return (
    <div className="App">
      <HomeRoute
        topics={topicData}
        photos={photoData}
        updateToFavPhotoIds={updateToFavPhotoIds}
        notifactionStatus={likePhotoArray.length > 0}
        setPhotoSelected={setPhotoSelected}
        likePhotoArray={likePhotoArray}
        setTopicId={setTopicId}
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
