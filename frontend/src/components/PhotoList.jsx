import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";


const PhotoList = () => {

  const photoData = photos.map((photo) => (
    <PhotoListItem
    key={photo.id}
    location={photo.location}
    urls={photo.urls}
    user={photo.user}
    />
  ))

  return (
    <ul className="photo-list">
      {photoData}
    </ul>
  );
};

export default PhotoList;
