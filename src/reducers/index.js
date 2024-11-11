import { combineReducers } from "@reduxjs/toolkit";
import  user from "./profile/getUserReducer";

const reducers = combineReducers({
    user : user,
})

export default reducers;