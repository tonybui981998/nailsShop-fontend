import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import useSelectTimeLogic from "../SelectTimeLogic/useSelectTimeLogic";
import "./SelectTimeAuto.scss";

const SelectTimeAuto = ({ startDate }) => {
  const containerRef = useRef();
  const { getDateselect, handleSelectStartDate } = useSelectTimeLogic();

  const [getFormatStartDate, setGetFormatStartDate] = useState("");
  useEffect(() => {
    const convertStartDate = () => {
      const getStartDate = new Date(startDate).getDate().toString();
      setGetFormatStartDate(getStartDate);
    };
    convertStartDate();
  }, [startDate]);
  useEffect(() => {
    if (containerRef.current) {
      const selectedElement = containerRef.current.querySelector(".highlight");
      if (selectedElement) {
        containerRef.current.scrollLeft =
          selectedElement.offsetLeft - containerRef.current.offsetLeft;
      }
    }
  }, [getFormatStartDate]);
  console.log("check date", getDateselect);
  console.log("check form", getFormatStartDate);
  console.log("check start date", startDate);
  return (
    <div className="SelectTimeAuto">
      <div className="line"></div>

      <div className="timeAuto" ref={containerRef}>
        {getDateselect &&
          getDateselect.map((item, index) => {
            const isSelected = item.day.toString() === getFormatStartDate;

            return (
              <div
                onClick={() => handleSelectStartDate(item.fullDate)}
                className="auto-main "
                key={index}
              >
                <div
                  className={`auto-date ${
                    item.day === getFormatStartDate ? "highlight" : ""
                  }`}
                >
                  {item.day}
                </div>
                <div className="auto-day  ">{item.date}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SelectTimeAuto;
