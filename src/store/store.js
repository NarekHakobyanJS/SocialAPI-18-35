import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducers from "./reducers/userReducers";
import {thunk} from 'redux-thunk'
import profileReducer from "./reducers/profileReducers";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    usersPage : userReducers,
    profilePage : profileReducer,
    auth : authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


window.store = store

