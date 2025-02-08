import React from "react";
import "./StaffTimeAvailable.scss";
import useSelectTimeLogic from "../SelectTimeLogic/useSelectTimeLogic";
import { useNavigate } from "react-router-dom";

const StaffTimeAvailable = ({ selectedStaff }) => {
  const navigate = useNavigate();

  const { handleClientSelectTime, selectStaffTime } = useSelectTimeLogic();

  const handleSelectandmovePage = (time) => {
    handleClientSelectTime(time);
    navigate("/5-star/Booking/selection/Referstaff/selecttime/confirmation");
  };
  return (
    <>
      <div className="StaffTimeAvailable">
        <div className="timeavailable-main">
          {selectedStaff &&
            selectedStaff.availableTimes.map((time, index) => {
              return (
                <div
                  key={index}
                  className="availableTime"
                  onClick={() => handleSelectandmovePage(time)}
                >
                  <div className="time-display">{time}</div>
                </div>
              );
            })}
        </div>
        <p>
          Can’t find a suitable time? <span>Join the waitlist.</span>{" "}
        </p>
      </div>
    </>
  );
};

export default StaffTimeAvailable;
