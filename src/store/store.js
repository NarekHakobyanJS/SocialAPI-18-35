import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducers from "./reducers/userReducers";
import {thunk} from 'redux-thunk'
import profileReducer from "./reducers/profileReducers";

const rootReducer = combineReducers({
    usersPage : userReducers,
    profilePage : profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


window.store = store

