// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useEffect, useState } from 'react';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likePhotoArray,setLikePhotoArray] = useState([]);
  const [notifaction, setNotifaction] = useState(false);
  const addPhotoToArray = (photoId) => {
    setLikePhotoArray(prevLikePhotoArray => [photoId, ...prevLikePhotoArray]);
    setNotifaction(true);
  }

  return (
    <div className="App">
      <HomeRoute
      topics={topics}
      photos={photos}
      addPhotoToArray={addPhotoToArray}
      notifaction={notifaction}
      />
    </div>
  );
};

export default App;
