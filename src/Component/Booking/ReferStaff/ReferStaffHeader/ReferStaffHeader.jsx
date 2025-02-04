import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ReferStaffHeader = () => {
  return (
    <div className="BookingSelect">
      <div className="header">
        <Link to={"/5-star/Booking/selection"} className="header-icon">
          <IoIosArrowBack />
        </Link>
        <div>Select your Professional</div>
        <div></div>
      </div>
    </div>
  );
};

export default ReferStaffHeader;
