import { base_url } from "../../constants/base_url";
import { actionError, actionPending, actionSuccess } from "../actionCreator";
import { Api } from "../Api";
import { GET_USER_SUCCESS, GET_USER_PENDING, GET_USER_ERROR } from "../../constants/action_type";


const get_user_url = "/user";

export function getUser(){
    return (dispatch) => {
        dispatch(actionPending(GET_USER_SUCCESS));
        Api.get(get_user_url)
        .then((res) => {
            dispatch(actionSuccess(GET_USER_SUCCESS, res.data.data))
        })
        .catch((error) => {
            dispatch(actionError(GET_USER_ERROR,error))
        })
    }
}