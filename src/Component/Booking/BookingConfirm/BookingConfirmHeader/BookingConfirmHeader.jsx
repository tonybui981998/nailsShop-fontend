import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BookingConfirmHeader = () => {
  return (
    <div>
      <div>
        <div className="BookingSelect">
          <div className="header">
            <Link
              to={"/5-star/Booking/selection/Referstaff/selecttime"}
              className="header-icon"
            >
              <IoIosArrowBack />
            </Link>
            <div>Booking Confirmation</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmHeader;
