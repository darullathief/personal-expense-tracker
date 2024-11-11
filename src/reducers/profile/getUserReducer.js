import { GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS } from "../../actions/profile/getUser";


const initialState = {
    loggedIn: false
}

export function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                data: action.data
            };
        case GET_USER_PENDING:
            return {
                ...state,
                pending: true
            };
        case GET_USER_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

export default user;