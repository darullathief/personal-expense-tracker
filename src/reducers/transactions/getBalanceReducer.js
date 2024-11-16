import { GET_BALANCE_ERROR, GET_BALANCE_PENDING, GET_BALANCE_SUCCESS } from "../../constants/action_type";


const initialState = {
    pending : false,
    data : {}
}

export function getBalanceReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BALANCE_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case GET_BALANCE_PENDING:
            return {
                ...state,
                pending: true
            };
        case GET_BALANCE_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

export default getBalanceReducer;