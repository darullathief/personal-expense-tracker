import { GET_TOTAL_EXPENSE_ERROR, GET_TOTAL_EXPENSE_PENDING, GET_TOTAL_EXPENSE_SUCCESS } from "../../constants/action_type";
import { actionError, actionPending, actionSuccess } from "../actionCreator";
import { Api } from "../Api"

const get_total_expense_url = "/transaction/get_calculation";

export function getTotalExpense(params) {
    return (dispatch) => {
        dispatch(actionPending(GET_TOTAL_EXPENSE_PENDING))
        Api.get(get_total_expense_url, {params : params})
            .then((res) => {
                dispatch(actionSuccess(GET_TOTAL_EXPENSE_SUCCESS, res.data.data.total))
            })
            .catch((error) => {
                dispatch(actionError(GET_TOTAL_EXPENSE_ERROR, error))
            })
    }
}