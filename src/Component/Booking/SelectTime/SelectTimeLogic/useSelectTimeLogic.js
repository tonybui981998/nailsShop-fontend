import React, { useEffect, useState } from "react";
import useBookingLogic from "../../BookingLogic/useBookingLogic";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const useSelectTimeLogic = () => {
  const [getDateselect, setGetDateSelect] = useState("");
  const { startDate } = useBookingLogic();

  const getDate = () => {
    const getDateInMonth = eachDayOfInterval({
      start: startOfMonth(startDate),
      end: endOfMonth(startDate),
    }).map((date) => ({
      day: format(date, "d"),
      date: format(date, "EEE"),
    }));
    setGetDateSelect(getDateInMonth);
  };
  useEffect(() => {
    getDate();
  }, [startDate]);
  return {
    startDate,
    getDateselect,
    getDate,
  };
};

export default useSelectTimeLogic;
