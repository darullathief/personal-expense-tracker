import { base_url } from "../../constants/base_url";
import { actionError, actionPending, actionSuccess } from "../actionCreator";
import { Api } from "../Api";


export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_PENDING = "GET_USER_PENDING";

const get_user_url = "/user";

export function getUser(param){
    return (dispatch) => {
        dispatch(actionPending(GET_USER_SUCCESS));
        Api.get(get_user_url, param)
        .then((res) => {
            dispatch(actionSuccess(GET_USER_SUCCESS, res.data))
        })
        .catch((error) => {
            dispatch(actionError(GET_USER_ERROR,error))
        })
    }
}