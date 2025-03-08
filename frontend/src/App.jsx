// import PhotoListItem from './components/PhotoListItem';
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import { useEffect, useState } from "react";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likePhotoArray, setLikePhotoArray] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalDisplayData, setModalDisplayData] = useState();

  const toggleModalDisplay = (photoData) => {
    setModalStatus(!modalStatus);
    setModalDisplayData(photoData);
  };

  const addPhotoToArray = (photoId) => {
    // state is behind. set state takes a call back so maybe change value right away?
    // should i save the length locally too? or maybe use length - 1 to make up for the state difference do to async
    likePhotoArray.includes(photoId)
      ? setLikePhotoArray((prevLikePhotoArray) =>
          prevLikePhotoArray.filter((id) => id != photoId)
        )
      : setLikePhotoArray((prevLikePhotoArray) => [
          photoId,
          ...prevLikePhotoArray,
        ]);
  };

  useEffect(() => {
    console.log(likePhotoArray);
  }, [likePhotoArray]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        addPhotoToArray={addPhotoToArray}
        notifactionStatus={likePhotoArray.length > 0}
        toggleModalDisplay={toggleModalDisplay}
        likePhotoArray={likePhotoArray}
      />

      {modalStatus && (
        <PhotoDetailsModal
          toggleModalDisplay={toggleModalDisplay}
          modalDisplayData={modalDisplayData}
          addPhotoToArray={addPhotoToArray}
          likePhotoArray={likePhotoArray}
        />
      )}
    </div>
  );
};

export default App;
