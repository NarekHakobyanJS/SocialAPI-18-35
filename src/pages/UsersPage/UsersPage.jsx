import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocialAPI } from '../../api/api';
import { getUsersAC } from '../../store/reducers/userReducers';

import './UsersPage.css';

const UsersPage = () => {
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.usersPage)

    console.log(users);
    
    useEffect(() => {
        SocialAPI.getUsers()
            .then((res) => {
                dispatch(getUsersAC(res.data.items))
            })
    }, [])
    return (
        <div className='users-page'>
            {
                users.map((user) => {
                    return <li key={user.id}>
                        <h2>{user.name}</h2>
                        <h2>{user.id}</h2>
                    </li>
                })
            }
        </div>
    )
}

export default UsersPage