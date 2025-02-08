import React, { useEffect, useState } from "react";
import useBookingLogic from "../../BookingLogic/useBookingLogic";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSelectStartDate,
  handleClientSelectTime,
} from "../../../Redux/counterSlice";

const useSelectTimeLogic = () => {
  const [getDateselect, setGetDateSelect] = useState("");
  const dispatch = useDispatch();
  const { startDate, selectStaffTime } = useSelector((state) => state.counter);
  // get date in the month
  const getDate = () => {
    const getDateInMonth = eachDayOfInterval({
      start: startOfMonth(startDate),
      end: endOfMonth(startDate),
    }).map((date) => ({
      day: format(date, "d"),
      fullDate: date,
      date: format(date, "EEE"),
    }));
    setGetDateSelect(getDateInMonth);
  };
  useEffect(() => {
    getDate();
  }, [startDate]);
  return {
    getDateselect,
    handleSelectStartDate: (startDate) =>
      dispatch(handleSelectStartDate(startDate)),
    startDate,
    selectStaffTime,
    handleClientSelectTime: (time) => dispatch(handleClientSelectTime(time)),
  };
};

export default useSelectTimeLogic;
