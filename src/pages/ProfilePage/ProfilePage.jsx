import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {changeAvatarThunk} from '../../store/reducers/profileReducers'

import { getProfileThunk } from '../../store/reducers/profileReducers'


const ProfilePage = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const {profile} = useSelector((state) => state.profilePage)
    useEffect(() => {
        dispatch(getProfileThunk(id))
    }, [id])
    

    const changeAvatar = (e) => {
      const file = e.target.files[0]
      dispatch(changeAvatarThunk(file, id))
      
    }
  return (
    <div>
      <h2>{profile?.fullName}</h2>
      <h2>{profile?.userId}</h2>
      <img src={profile?.photos?.large} />
      {
        id === localStorage.getItem('userId') && <input type='file' onChange={changeAvatar}/>
      } 
    </div>
  )
}

export default ProfilePage