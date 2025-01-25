import React from 'react'
import userLogo from '../../assets/user.png'
import './UserCard.css'
import { NavLink } from 'react-router-dom'

const UserCard = ({user}) => {

    
  return (
    <div className='user-card'>
        <NavLink to={`/profile/${user.id}`}><h2>{user?.name}</h2></NavLink>
        <img src={user?.photos?.large === null ? userLogo : user?.photos?.large}/>
        <b>{user?.id}</b>
        <button>follow</button>
    </div>
  )
}

export default UserCard