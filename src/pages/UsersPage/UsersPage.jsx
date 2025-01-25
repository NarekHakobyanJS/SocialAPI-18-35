import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk, changePageAC } from '../../store/reducers/userReducers';

import './UsersPage.css';
import UserCard from '../../components/UserCard/UserCard';

const UsersPage = () => {
    const dispatch = useDispatch()
    const { users, isFetching, totalUserCount, pageUserCount, page } = useSelector((state) => state.usersPage)

    useEffect(() => {
        dispatch(getUsersThunk(page))
    }, [page])



    const pageBTN = Math.ceil(totalUserCount/pageUserCount)
    
    let pagesArrray = []
    for(let i = 1; i <= pageBTN; i++){
        pagesArrray.push(i)
    }


    const changePage = (p) => {
        dispatch(changePageAC(p)) 
    }

    return (
        <div className='users-page'>
            <div>
                {
                    pagesArrray.map((p) => {
                        return <button onClick={() => changePage(p)} key={p}>{p}</button>
                    })
                }
            </div>
            <div className='users-cards'>
            {
                isFetching 
                ? 
                <h1>Loading...</h1> 
                : 
                users.map((user) => {
                    return <UserCard user={user} key={user.id}/>
                })
            }
            </div>
        </div>
    )
}

export default UsersPage