import { GET_BUDGET_ERROR, GET_BUDGET_PENDING, GET_BUDGET_SUCCESS } from "../../constants/action_type";
import { actionError, actionPending, actionSuccess } from "../actionCreator";
import { Api } from "../Api"

const get_budget_url = "/budgets/get_month_calculation";

export function getBudget(param) {
    return (dispatch) => {
        dispatch(actionPending(GET_BUDGET_PENDING))
        Api.get(get_budget_url, param)
            .then((res) => {
                actionPending(actionSuccess(GET_BUDGET_SUCCESS, res.data.data))
            })
            .catch((error) => {
                actionPending(actionError(GET_BUDGET_ERROR, error))
            })
    }
}