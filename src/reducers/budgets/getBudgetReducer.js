import { GET_BUDGET_ERROR, GET_BUDGET_PENDING, GET_BUDGET_SUCCESS } from "../../constants/action_type";


const initialState = {
    pending : false,
    data : {}
}

export function getBudgetReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BUDGET_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case GET_BUDGET_PENDING:
            return {
                ...state,
                pending: true
            };
        case GET_BUDGET_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

export default getBudgetReducer;