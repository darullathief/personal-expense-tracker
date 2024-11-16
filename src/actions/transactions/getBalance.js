import { GET_BALANCE_ERROR, GET_BALANCE_PENDING, GET_BALANCE_SUCCESS } from "../../constants/action_type";
import { actionError, actionPending, actionSuccess } from "../actionCreator";
import { Api } from "../Api"

const get_balance_url = "/transaction/balance";

export function getBalance(params) {
    return (dispatch) => {
        dispatch(actionPending(GET_BALANCE_PENDING))
        Api.get(get_balance_url, {params : params})
            .then((res) => {
                dispatch(actionSuccess(GET_BALANCE_SUCCESS, res.data.data))
            })
            .catch((error) => {
                dispatch(actionError(GET_BALANCE_ERROR, error))
            })
    }
}