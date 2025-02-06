import React from "react";
import useBookingLogic from "../../BookingLogic/useBookingLogic";
import "./ChangeStaffModel.scss";

const ChangeStaffModel = ({ closeModel }) => {
  const { getstaff, selectedStaff, handleSelectStaff } = useBookingLogic();
  const closeModelafterSelect = (item) => {
    handleSelectStaff(item);
    closeModel();
  };

  return (
    <div className="changeStaffModel">
      {getstaff &&
        getstaff.map((item, index) => {
          return (
            <div
              className="main-model"
              key={index}
              onClick={() => closeModelafterSelect(item)}
            >
              <img src={item.image} />
              <div className="model-name">{item.name}</div>
              <div className="model-role">{item.role}</div>
            </div>
          );
        })}
    </div>
  );
};

export default ChangeStaffModel;
