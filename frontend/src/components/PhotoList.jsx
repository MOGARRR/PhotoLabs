import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoData = props.photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      urls={photo.urls}
      user={photo.user}
      similar_photos={photo.similar_photos}
      updateToFavPhotoIds={props.updateToFavPhotoIds}
      setPhotoSelected={props.setPhotoSelected}
      likePhotoArray={props.likePhotoArray}
      dark={props.dark}
    />
  ));

  return <ul className="photo-list">{photoData}</ul>;
};

export default PhotoList;
