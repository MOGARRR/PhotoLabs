// import { useState } from "react"
import { useReducer, useEffect } from "react";


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_MODAL_DATA: 'SET_MODAL_DATA',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA', 
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_TOPIC_ID: 'SET_TOPIC_ID',
  GET_TOPIC_NEW_DATA: 'GET_TOPIC_NEW_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DESELECT_PHOTO:'DESELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
}

const useApplicationData = () => {
  
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, likePhotoArray:[action.id, ...state.likePhotoArray]};
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {...state, likePhotoArray: state.likePhotoArray.filter((id) => id !== action.id)}
      case ACTIONS.SELECT_PHOTO:
        return {...state, toggleModal:true}
      case ACTIONS.DESELECT_PHOTO:
        return {...state, toggleModal:false}
      case ACTIONS.SET_MODAL_DATA:
        return {...state, modalDisplayData: action.payload}
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload }
      case ACTIONS.SET_TOPIC_DATA:
        return {...state, topicData: action.payload}
      case ACTIONS.SET_TOPIC_ID:
        return {...state, topicId: action.id}
      case ACTIONS.GET_TOPIC_NEW_DATA:
        return {...state, photoData: action.payload}
      default:
        throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
      }
    }
    
    const [state ,dispatch] = useReducer(reducer, {
      likePhotoArray: [],
      toggleModal: false,
      modalDisplayData: 0,
      photoData: [],
      topicData: [],
      topicId: null,
    })

  const updateToFavPhotoIds = (photoId) => {
    state.likePhotoArray.includes(photoId)
      ? dispatch({type:'FAV_PHOTO_REMOVED', id:photoId})
      : dispatch({type:'FAV_PHOTO_ADDED', id:photoId})
  };

  const setPhotoSelected = (photoData) => {
    dispatch({type:'SET_MODAL_DATA', payload:photoData})
    dispatch({type:'SELECT_PHOTO'})
  };

  const onClosePhotoDetailsModal = () => dispatch({type:'DESELECT_PHOTO'});

  const setTopicId = (id) => {
    dispatch({type:'SET_TOPIC_ID', id: id});
  }
  
  useEffect(() => {
    fetch('http://localhost:8001/api/photos', {method: 'GET'})
    .then(res => res.json())
    .then(data => dispatch({type:'SET_PHOTO_DATA', payload: data}))
    .catch(err => console.log('err',err));

    fetch('http://localhost:8001/api/topics', {method:'GET'})
    .then(res => res.json())
    .then(data => dispatch({type:'SET_TOPIC_DATA', payload: data}))
    .catch(err => console.log('err',err));
  },[])

  useEffect(()=>{
    if(state.topicId !== null){
      fetch(`http://localhost:8001/api/topics/${state.topicId}/photos`, {method: 'GET'})
      .then(res => res.json())
      .then(data => dispatch({type:'SET_PHOTO_DATA', payload:data}))
      .catch(err => console.log('err',err));
      console.log();
    }
  },[state.topicId])
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setTopicId,
  };

};


export {useApplicationData}