import { SocialAPI } from "../../api/api"

const GET_PROFILE = "GET_PORFILE"
const IS_FETCHING = "IS_FETCHING"

const initState = {
    profile: null,
    isFetching: false
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

const getProfileAC = (profile) => ({ type: GET_PROFILE, payload: profile })
const isFetchingAC = (fetching) => ({type : IS_FETCHING, payload : fetching})




export const getProfileThunk = (id) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        SocialAPI.getUserProfile(id)
            .then((res) => {
                dispatch(getProfileAC(res.data))
                dispatch(isFetchingAC(false))
            })
    }
}


export const changeAvatarThunk = (file, id) => {
    return (dispatch) => {
        SocialAPI.changeAvatar(file)
            .then(() => {
                dispatch(getProfileThunk(id))
            })
    }
}

export default profileReducer
