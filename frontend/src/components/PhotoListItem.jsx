import { useState, useEffect } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { location, urls, user, id, addPhotoToArray} = props;


  
  return (
    <div className="photo-list__item">
      <PhotoFavButton 
      id={id}
      addPhotoToArray={addPhotoToArray}
      />
      <img
        className="photo-list__image"
        src={urls.regular}
        alt="Regular image"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={user.name + "'s profile image"}
        />
        <div className="photo-list__user-info">
          {user.name}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
