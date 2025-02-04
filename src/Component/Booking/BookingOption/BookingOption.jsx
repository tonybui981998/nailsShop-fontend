import React from "react";
import "./BookingOption.scss";
import { Link } from "react-router-dom";

const BookingOption = () => {
  return (
    <div className="bookingoption">
      <div className="mainoption">
        <div className="option1">
          <div className="header">Choose an options</div>
          <div className="header-1">Booking</div>
          <div className="option-content">
            <Link
              to={"/5-star/Booking/selection"}
              style={{ textDecoration: "none" }}
            >
              <div>Book an appointment</div>
              <p>Schedule services for yourself</p>
            </Link>
          </div>

          <div className="option-content">
            <div>Book for other people</div>
            <p>For yourself and others</p>
          </div>
          <div className="header-1">Buy</div>
          <div className="option-content">
            <div>Gift Cards</div>
            <p>Treat yourself or a friend with future visit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOption;
