import React, { useState } from "react";
import useBookingLogic from "../../BookingLogic/useBookingLogic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelect.scss";
import { FaExchangeAlt } from "react-icons/fa";

const DateSelect = () => {
  const { selectedStaff, startDate, setStartDate } = useBookingLogic();
  console.log("check", startDate);

  return (
    <div className="dateSelect">
      <div className="leftside">
        <img src={selectedStaff.image} />
        <div className="name">{selectedStaff.name}</div>
        <div className="icon">
          <FaExchangeAlt />
        </div>
      </div>
      <div className="middleside">
        <DatePicker
          toggleCalendarOnIconClick
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showIcon
        />
      </div>
    </div>
  );
};

export default DateSelect;
