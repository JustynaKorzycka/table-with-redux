import React from 'react'
import {  useDispatch } from 'react-redux';
import { logiIn } from '../redux/actions';
import { useNavigate } from 'react-router-dom';


const FaceLoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    dispatch(logiIn());
    navigate('/clients')
  }
  return (
    <div>
      <button onClick={handleOnClick}>Sign in!</button>
    </div>
  )
}


export default FaceLoginComponent
