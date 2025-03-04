import { use } from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.sampleDataForPhotoListItem;
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={urls.regular} alt="Regular image" />
      <div className="photo-list__user-details">
        <img className='photo-list__user-profile' src={user.profile} alt="Profile Image" />
        <div className="photo-list__user-info">
          {user.name}
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
