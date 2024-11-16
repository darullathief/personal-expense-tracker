import { useState } from "react";
import MonthFilter from "../components/MonthFilter";
import Navigation from "../components/Navigation";
import DatePicker from "react-datepicker";
import OverviewCard from "../components/OverviewCard";
import { connect } from "react-redux";

const Home = () => {
    const [startDate, setStartDate] = useState(new Date());

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
                    <OverviewCard name="Budgets"/>
                    <OverviewCard name="Expenses"/>
                    <OverviewCard name="Balance"/>
                </div>
            </div>
        </div>
    )
}

function mapStatetoProps(state){
    return {
        state : state
    }
}
export default connect(mapStatetoProps, {}) (Home);