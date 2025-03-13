import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
 const {
  modalDisplayData,
  updateToFavPhotoIds,
  likePhotoArray,
  onClosePhotoDetailsModal,
  dark,
  } = props;

  const {
    id,
    location,
    urls,
    user,
    similar_photos
  } = modalDisplayData;

  const parsedSimlarPhotos = Object.values(similar_photos);

  return (
    <div className={`photo-details-modal ${dark}`}>
      <button
        className={`photo-details-modal__close-button ${dark}`}
        //get new close symbol
        onClick={()=>{onClosePhotoDetailsModal()}}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          id={id}
          updateToFavPhotoIds={updateToFavPhotoIds}
          likePhotoArray={likePhotoArray}
        />
        <img src={urls.full} alt="" className=" photo-details-modal__image" />

        <header className="photo photo-details-modal__photographer-details  ">
          <img
            src={user.profile}
            alt={`${user.username}'s profile`}
            className="photo-details-modal__photographer-profile photo-details-modal__top-bar"
          />

          <div className="photo-details-modal__photographer-info">
            {user.name}
            <div className="photo-details-modal__photographer-location">
              {location.city}, {location.country}
            </div>
          </div>
        </header>
        <p className={`photo-details-modal__top-bar photo-details-modal__header ${dark}`}>Simlar Photos</p>
      </div>

      <div className="photo-details-modal__images">
        <PhotoList
          photos={parsedSimlarPhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          setPhotoSelected={null}
          likePhotoArray={likePhotoArray}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
