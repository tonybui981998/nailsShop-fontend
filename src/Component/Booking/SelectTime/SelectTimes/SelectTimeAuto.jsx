import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import useSelectTimeLogic from "../SelectTimeLogic/useSelectTimeLogic";
import "./SelectTimeAuto.scss";

const SelectTimeAuto = ({ startDate, selectedStaff }) => {
  const containerRef = useRef();
  const { getDateselect } = useSelectTimeLogic();
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
  console.log(getDateselect);
  return (
    <div className="SelectTimeAuto">
      <div className="line"></div>
      <div className="selectTIme-icon">
        <MdArrowBackIos />{" "}
        <span>
          <GrNext />
        </span>
      </div>
      <div className="timeAuto" ref={containerRef}>
        {getDateselect &&
          getDateselect.map((item, index) => {
            const isSelected = item.day.toString() === getFormatStartDate;
            return (
              <div className="auto-main " key={index}>
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
