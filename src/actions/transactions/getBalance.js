import { GET_BALANCE_ERROR, GET_BALANCE_PENDING, GET_BALANCE_SUCCESS } from "../../constants/action_type";
import { actionError, actionPending, actionSuccess } from "../actionCreator";
import { Api } from "../Api"

const get_balance_url = "/BALANCEs/get_month_calculation";

export function getBalance(param) {
    return (dispatch) => {
        dispatch(actionPending(GET_BALANCE_PENDING))
        Api.get(get_balance_url, param)
            .then((res) => {
                actionPending(actionSuccess(GET_BALANCE_SUCCESS, res.data.data))
            })
            .catch((error) => {
                actionPending(actionError(GET_BALANCE_ERROR, error))
            })
    }
}