import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from "../../constants/action_type";


const initialState = {
    loggedIn : false,
}

export function isLoggedIn(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case LOGIN_PENDING:
            return {
                ...state,
                pending: true
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

export default isLoggedIn;