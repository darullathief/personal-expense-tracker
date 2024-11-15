import { useState } from "react";
import MonthFilter from "../components/MonthFilter";
import Navigation from "../components/Navigation";
import Overview from "../components/Overview";
import DatePicker from "react-datepicker";

const Home = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <Navigation />
            <div className="banner"></div>

            <div className="overview-container">
                <div className="month-wrapper">
                    <DatePicker
                    value={startDate}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showMonthYearPicker
                        dateFormat="MMMM yyyy"
                        customInput={<MonthFilter className="example-custom-input" />} />
                </div>
                <Overview />
            </div>
        </div>
    )
}

export default Home;