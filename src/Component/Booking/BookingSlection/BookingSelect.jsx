import React, { useState } from "react";
import "./BookingSelect.scss";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import BookingMenu from "./BookingMenu";

const BookingSelect = () => {
  return (
    <div className="BookingSelect">
      <div className="header">
        <Link to={"/5-star/Booking"} className="header-icon">
          <IoIosArrowBack />
        </Link>
        <div>Select your service</div>
        <div></div>
      </div>
      <BookingMenu />
    </div>
  );
};

export default BookingSelect;
