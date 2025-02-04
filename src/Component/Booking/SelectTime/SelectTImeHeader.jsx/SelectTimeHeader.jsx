import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const SelectTimeHeader = () => {
  return (
    <div>
      <div className="BookingSelect">
        <div className="header">
          <Link
            to={"/5-star/Booking/selection/Referstaff"}
            className="header-icon"
          >
            <IoIosArrowBack />
          </Link>
          <div>Select your Time</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SelectTimeHeader;
