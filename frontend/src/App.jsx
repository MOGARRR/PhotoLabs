// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useEffect, useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likePhotoArray,setLikePhotoArray] = useState([]);
  const [notifactionStatus, setNotifactionStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const toggleModalStatus = () => setModalStatus(!modalStatus);

  const addPhotoToArray = (photoId) => {
    setLikePhotoArray(prevLikePhotoArray => [photoId, ...prevLikePhotoArray]);
    setNotifactionStatus(true);
  }

  return (
    <div className="App">

      {modalStatus && <PhotoDetailsModal toggleModalStatus={toggleModalStatus}/>}

      <HomeRoute
      topics={topics}
      photos={photos}
      addPhotoToArray={addPhotoToArray}
      notifactionStatus={notifactionStatus}
      toggleModalStatus={toggleModalStatus}
      />
    </div>
  );
};

export default App;
