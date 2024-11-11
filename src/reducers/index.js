import { combineReducers } from "@reduxjs/toolkit";
import isLoggedIn from "./auth/loginReducer";
import  user from "./profile/getUserReducer";

const reducers = combineReducers({
    user : user,
    isLoggedIn: isLoggedIn
})

export default reducers;