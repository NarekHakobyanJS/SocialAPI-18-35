import React from 'react'
import userLogo from '../../assets/user.png'
import './UserCard.css'

const UserCard = ({user}) => {

    
  return (
    <div className='user-card'>
        <h2>{user?.name}</h2>
        <img src={user?.photos?.large === null ? userLogo : user?.photos?.large}/>
        <b>{user?.id}</b>
        <button>follow</button>
    </div>
  )
}

export default UserCard