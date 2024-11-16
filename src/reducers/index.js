import { combineReducers } from "@reduxjs/toolkit";
import isLoggedIn from "./auth/loginReducer";
import getBudgetReducer from "./budgets/getBudgetReducer";
import  user from "./profile/getUserReducer";
import getBalanceReducer from "./transactions/getBalanceReducer";
import getTotalExpenseReducer from "./transactions/getTotalExpenseReducer";

const reducers = combineReducers({
    user : user,
    isLoggedIn: isLoggedIn,
    budgets: getBudgetReducer,
    totalExpense: getTotalExpenseReducer,
    balance: getBalanceReducer
})

export default reducers;