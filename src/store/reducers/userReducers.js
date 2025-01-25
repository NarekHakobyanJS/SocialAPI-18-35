import { SocialAPI } from "../../api/api"

const GET_USERS = 'GET_USERS'
const IS_FETCHING = 'IS_FETCHING'
const CHANGE_PAGE = "CHANGE_PAGE"

const initState = {
    users : [],
    totalUserCount : 1000,
    pageUserCount : 100,
    page : 1,
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
        case CHANGE_PAGE :
                return {
                    ...state,
                    page : action.payload
                }
        default :
            return state 
    }
}

const getUsersAC = (users) => ({type : GET_USERS, payload : users})
const isFetchingAC = (fetching) => ({type : IS_FETCHING, payload : fetching})
export const changePageAC = (page) => ({type : CHANGE_PAGE, payload : page})
// THUNKCREATOR
export const getUsersThunk = (page) => {
    
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        SocialAPI.getUsers(page)
            .then((res) => {
                // console.log(res.data);
                
                dispatch(getUsersAC(res.data.items))
                dispatch(isFetchingAC(false))
            })
    }
}
export default userReducers