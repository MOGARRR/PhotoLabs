import { use } from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.sampleDataForPhotoListItem;
  return (
    <div>
      <p>id={id}</p>
      <img src={urls.regular} alt="Regular image" />
      <img src={user.profile} alt="Profile Image" />
      <p>{user.name}</p>
      <p>{location.city}, {location.country}</p>
    </div>
  )
};

export default PhotoListItem;
