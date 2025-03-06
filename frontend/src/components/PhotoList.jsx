import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {

  const photoData = props.photos.map((photo) => (
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
