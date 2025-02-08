import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useBookingLogic from "../../BookingLogic/useBookingLogic";
import useSelectTimeLogic from "../../SelectTime/SelectTimeLogic/useSelectTimeLogic";

const useBookingConfirmLogic = () => {
  const { selectItem, selectedStaff, TotalPrice } = useBookingLogic();
  const { selectStaffTime } = useSelectTimeLogic();

  return {
    selectItem,
    selectStaffTime,
    selectedStaff,
    TotalPrice,
  };
};

export default useBookingConfirmLogic;
