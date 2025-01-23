import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducers from "./reducers/userReducers";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
    usersPage : userReducers
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

