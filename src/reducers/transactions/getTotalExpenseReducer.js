import { GET_TOTAL_EXPENSE_ERROR, GET_TOTAL_EXPENSE_PENDING, GET_TOTAL_EXPENSE_SUCCESS } from "../../constants/action_type";


const initialState = {
    pending : false,
    data : {}
}

export function getTotalExpenseReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOTAL_EXPENSE_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case GET_TOTAL_EXPENSE_PENDING:
            return {
                ...state,
                pending: true
            };
        case GET_TOTAL_EXPENSE_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

export default getTotalExpenseReducer;