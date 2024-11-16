import { useEffect, useState } from "react";
import MonthFilter from "../components/MonthFilter";
import Navigation from "../components/Navigation";
import DatePicker from "react-datepicker";
import OverviewCard from "../components/OverviewCard";
import { connect } from "react-redux";
import { getBudget } from "../actions/budgets/getBudget";
import { getTotalExpense } from "../actions/transactions/getTotalExpense";
import { getBalance } from "../actions/transactions/getBalance";


const Home = (props) => {
    const moment = require('moment');
    const [startDate, setStartDate] = useState(new Date());

    const get_data = () => {
        props.getBudget({
            date: moment(startDate).format('YYYY-MM-DD'),
        });

        props.getTotalExpense({
            group: "date",
            start_date: moment(startDate).startOf('month').format('YYYY-MM-DD'),
            end_date: moment(startDate).endOf('month').format('YYYY-MM-DD')
        });
        props.getBalance({
            start_date: moment(startDate).startOf('month').format('YYYY-MM-DD'),
            end_date: moment(startDate).endOf('month').format('YYYY-MM-DD')
        });
    }

    useEffect(()=>{
        get_data();
    },[])

    useEffect(()=>{
        get_data();
    },[startDate])
    
    return (
        <div>
            <Navigation />
            <div className="banner"></div>

            <div className="overview-container">
                <div className="month-wrapper">
                    <DatePicker
                        className="month-picker"
                        value={startDate}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showMonthYearPicker
                        dateFormat="MMMM yyyy"
                        customInput={<MonthFilter className="example-custom-input" />} />
                </div>
                <div className="overview">
                    <OverviewCard name="Budgets" amount ={props.budgets} pending={props.budgetsPending}/>
                    <OverviewCard name="Expenses"  amount ={props.totalExpense} pending={props.totalExpensePending}/>
                    <OverviewCard name="Balance"  amount ={props.balance} pending={props.balancePending}/>
                </div>
            </div>
        </div>
    )
}

function mapStatetoProps(state){
    return {
        budgets : state.budgets.data,
        totalExpense : state.totalExpense.data,
        balance : state.balance.data,
        budgetsPending : state.budgets.pending,
        totalExpensePending : state.totalExpense.pending,
        balancePending : state.balance.pending,

    }
}
export default connect(mapStatetoProps, {
    getBudget,
    getTotalExpense,
    getBalance
}) (Home);