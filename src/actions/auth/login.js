import { base_url } from "../../constants/base_url";
import { actionError, actionPending, actionSuccess } from "../actionCreator";
import { Api } from "../Api";
import { LOGIN_SUCCESS, LOGIN_PENDING, LOGIN_ERROR } from "../../constants/action_type";
import { redirect } from "react-router-dom";


const login_url = "/user/login";

export function login(param){
    return (dispatch) => {
        dispatch(actionPending(LOGIN_SUCCESS));
        Api.post(login_url, param)
        .then((res) => {
            localStorage.setItem("exptra_auth", res.data.data.token);
            dispatch(actionSuccess(LOGIN_SUCCESS, res.data));
        })
        .catch((error) => {
            dispatch(actionError(LOGIN_ERROR,error))
        })
    }
}