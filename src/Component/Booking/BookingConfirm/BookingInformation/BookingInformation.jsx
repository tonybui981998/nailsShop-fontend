import React from "react";
import useBookingLogic from "../../BookingLogic/useBookingLogic";
import useBookingConfirmLogic from "../BookingConfirmLogic/useBookingConfirmLogic";
import "./BookingInformation.scss";
import { GrLocation } from "react-icons/gr";

const BookingInformation = () => {
  //const { selectItem, selectedStaff } = useBookingLogic();
  const { selectItem, selectStaffTime, selectedStaff, TotalPrice } =
    useBookingConfirmLogic();

  console.log("check selectItem", selectItem);
  console.log("check select Staff", selectedStaff);
  console.log("check staffTime", selectStaffTime);
  console.log("check totalPrice", TotalPrice);
  return (
    <div className="BookingInformation">
      <div className="user-information">
        <div className="title">Please enter your details</div>
        <div className="user-input">
          <label>FullName:</label>
          <br />
          <input type="text" />
        </div>
        <div className="user-input">
          <label>Phone Number:</label>
          <br />
          <input type="text" />
        </div>
        <div className="user-input">
          <label>Email:</label>
          <br />
          <input type="email" />
        </div>
      </div>
      <div className="booking-information">
        <div className="title">Booking details</div>
        <div className="details">
          <div className="staff">Staff : {selectedStaff.name}</div>
          <div className="service">
            <span> Service:</span>

            {selectItem &&
              selectItem.map((item, index) => {
                return (
                  <div key={index} className="service-option">
                    <div className="name">+ {item.name}</div>
                  </div>
                );
              })}
          </div>
          <div className="time">Time Booking:{selectStaffTime}</div>
          <div className="totalPrice">TotalPrice: {TotalPrice}</div>
          <div className="location">
            <GrLocation /> <span>1234 yen cute dethuong mong mow</span>
          </div>
          <button>Booking</button>
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
