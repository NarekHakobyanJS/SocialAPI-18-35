import { createStore, combineReducers } from "redux";
import userReducers from "./reducers/userReducers";

const rootReducer = combineReducers({
    usersPage : userReducers
})

export const store = createStore(rootReducer)

