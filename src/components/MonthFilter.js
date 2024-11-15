import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";


const MonthFilter = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <input
            className="month-picker"
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
            isSecure={props.isSecure}
            id={props.id}
            onClick={props.onClick}
            readOnly
        />
    );
};

export default MonthFilter;