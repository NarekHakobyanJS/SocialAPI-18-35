import { SocialAPI } from "../../api/api"

const LOGIN = "LOGIN"
const initState = {
    userId : null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                userId : action.payload.userId
            }
        default :
            return state
    }
}

export const loginAC = (data) => ({type : LOGIN, payload : data})

export const loginThunk = (body) => {
    return (dispatch) => {
        SocialAPI.login(body)
            .then((res) => dispatch(loginAC(res.data.data)))
    }
}
export default authReducer