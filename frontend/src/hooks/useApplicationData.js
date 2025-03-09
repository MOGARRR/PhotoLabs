import { useState } from "react"


const useApplicationData = () => {

  const [likePhotoArray, setLikePhotoArray] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalDisplayData, setModalDisplayData] = useState();

  const updateToFavPhotoIds = (photoId) => {
    likePhotoArray.includes(photoId)
      ? setLikePhotoArray((prevLikePhotoArray) =>
          prevLikePhotoArray.filter((id) => id != photoId)
        )
      : setLikePhotoArray((prevLikePhotoArray) => [
          photoId,
          ...prevLikePhotoArray,
        ]);
  };

  const setPhotoSelected = (photoData) => {
    setToggleModal(true);
    setModalDisplayData(photoData)
  };

  const onClosePhotoDetailsModal = () => setToggleModal(false);

  const state = {
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    toggleModal,
    likePhotoArray,
    modalDisplayData,
  };
  return state;

};

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.
export default useApplicationData