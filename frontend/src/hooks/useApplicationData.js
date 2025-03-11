// import { useState } from "react"
import { useReducer } from "react";


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DESELECT_PHOTO:'DESELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const useApplicationData = () => {
  
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, likePhotoArray:[action.id, ...state.likePhotoArray]};
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {...state, likePhotoArray: state.likePhotoArray.filter((id) => id != action.id)}
      case ACTIONS.SELECT_PHOTO:
        return {...state, toggleModal:true}
      case ACTIONS.DESELECT_PHOTO:
        return {...state, toggleModal:false}
      case ACTIONS.SET_PHOTO_DATA:
        return {...state, modalDisplayData: action.payload}
      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
      }
    }
    
    const [state ,dispatch] = useReducer(reducer, {
      likePhotoArray: [],
      toggleModal: false,
      modalDisplayData: 0,
    })

  const updateToFavPhotoIds = (photoId) => {
    state.likePhotoArray.includes(photoId)
      ? dispatch({type:'FAV_PHOTO_REMOVED', id:photoId})
      : dispatch({type:'FAV_PHOTO_ADDED', id:photoId})
  };

  const setPhotoSelected = (photoData) => {
    dispatch({type:'SET_PHOTO_DATA', payload:photoData})
    dispatch({type:'SELECT_PHOTO'})
  };

  const onClosePhotoDetailsModal = () => dispatch({type:'DESELECT_PHOTO'});

  

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };

};


export {useApplicationData}