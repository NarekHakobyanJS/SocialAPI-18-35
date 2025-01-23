import { SocialAPI } from "../../api/api"

const GET_USERS = 'GET_USERS'
const IS_FETCHING = 'IS_FETCHING'

const initState = {
    users : [],
    isFetching : false
}


const userReducers = (state = initState, action) => {
    switch(action.type){
        case GET_USERS :
            return {
                ...state,
                users : action.payload
            }
        case IS_FETCHING :
            return {
                ...state,
                isFetching : action.payload
            }
        default :
            return state 
    }
}

const getUsersAC = (users) => ({type : GET_USERS, payload : users})
const isFetchingAC = (fetching) => ({type : IS_FETCHING, payload : fetching})

export const getUsersThunk = () => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        SocialAPI.getUsers()
            .then((res) => {
                dispatch(getUsersAC(res.data.items))
                dispatch(isFetchingAC(false))
            })
    }
}
export default userReducers