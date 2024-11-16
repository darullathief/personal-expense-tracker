import { GET_BUDGET_ERROR, GET_BUDGET_PENDING, GET_BUDGET_SUCCESS } from "../../constants/action_type";


const initialState = {
    pending : false,
    data : 0
}

export function getBudgetReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BUDGET_SUCCESS:
            return {
                ...state,
                pending: false,
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
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default getBudgetReducer;