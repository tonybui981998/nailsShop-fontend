import React, { useState } from "react";
import useBookingLogic from "../../BookingLogic/useBookingLogic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelect.scss";
import { FaExchangeAlt } from "react-icons/fa";
import ChangeStaffModel from "../ChangeStaffModel/ChangeStaffModel";
import SelectTimeAuto from "../SelectTimes/SelectTimeAuto";
import useSelectTimeLogic from "../SelectTimeLogic/useSelectTimeLogic";
import StaffTimeAvailable from "../StaffTimeAvailable/StaffTimeAvailable";

const DateSelect = () => {
  const { selectedStaff } = useBookingLogic();
  const { startDate, handleSelectStartDate } = useSelectTimeLogic();
  const [disPlayModel, setDisPlayModel] = useState(false);

  // open model
  const openModel = () => {
    setDisPlayModel(!disPlayModel);
  };
  // close model
  const closeModel = () => {
    setDisPlayModel(false);
  };

  return (
    <>
      <div className="dateSelect">
        <div className="leftside" onClick={() => openModel()}>
          <img src={selectedStaff.image} />
          <div className="name">{selectedStaff.name}</div>
          <div className="icon">
            <FaExchangeAlt />
          </div>
        </div>
        <div className="middleside" onClick={() => closeModel()}>
          <DatePicker
            toggleCalendarOnIconClick
            selected={startDate}
            onChange={(date) => handleSelectStartDate(date)}
            showIcon
          />
        </div>
      </div>

      {disPlayModel === true ? (
        <ChangeStaffModel closeModel={closeModel} />
      ) : (
        <div></div>
      )}
      <SelectTimeAuto startDate={startDate} selectedStaff={selectedStaff} />
      <StaffTimeAvailable selectedStaff={selectedStaff} />
    </>
  );
};

export default DateSelect;
