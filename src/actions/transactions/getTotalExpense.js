import { GET_TOTAL_EXPENSE_ERROR, GET_TOTAL_EXPENSE_PENDING, GET_TOTAL_EXPENSE_SUCCESS } from "../../constants/action_type";
import { actionError, actionPending, actionSuccess } from "../actionCreator";
import { Api } from "../Api"

const get_total_expense_url = "/transaction/get";

export function getTotalExpense(param) {
    return (dispatch) => {
        dispatch(actionPending(GET_TOTAL_EXPENSE_PENDING))
        Api.get(get_total_expense_url, param)
            .then((res) => {
                actionPending(actionSuccess(GET_TOTAL_EXPENSE_SUCCESS, res.data.data))
            })
            .catch((error) => {
                actionPending(actionError(GET_TOTAL_EXPENSE_ERROR, error))
            })
    }
}