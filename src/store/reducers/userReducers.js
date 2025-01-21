const GET_USERS = 'GET_USERS'

const initState = {
    users : []
}

const userReducers = (state = initState, action) => {
    switch(action.type){
        case GET_USERS :
            return {
                ...state,
                users : action.payload
            }
        default :
            return state 
    }
}

export const getUsersAC = (users) => ({type : GET_USERS, payload : users})

export default userReducers