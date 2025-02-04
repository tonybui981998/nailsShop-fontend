import useBookingLogic from "../../BookingLogic/useBookingLogic";
import "./ReferStaff.scss";
import { Link } from "react-router-dom";

import { useState } from "react";

const ReferStaff = () => {
  const {
    getstaff,
    getopenModel,
    openModel,
    handleSelectStaff,
    selectedStaff,
  } = useBookingLogic();

  // console.log("check staff", selectStaff);
  return (
    <>
      <div className="ReferStaff">
        {getstaff &&
          getstaff.map((item, index) => {
            return (
              <Link
                to={"/5-star/Booking/selection/Referstaff/selecttime"}
                key={index}
                className="staffmain"
                // onClick={() => getopenModel()}
                onClick={() => handleSelectStaff(item)}
              >
                <img src={item.image} />
                <div className="staff-name">{item.name}</div>
                <div className="staff-role">{item.role}</div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default ReferStaff;
