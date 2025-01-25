import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileThunk } from '../../store/reducers/profileReducers'


const ProfilePage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getProfileThunk(id))
    }, [id])

  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage