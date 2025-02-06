import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import useSelectTimeLogic from "../SelectTimeLogic/useSelectTimeLogic";

const SelectTimeAuto = () => {
  const { getDateselect } = useSelectTimeLogic();
  console.log(getDateselect);
  return (
    <div className="SelectTimeAuto">
      <div className="selectTIme-icon">
        <div>
          <MdArrowBackIos />{" "}
          <span>
            <GrNext />
          </span>
        </div>
      </div>
      <div className="timeAuto">
        {getDateselect &&
          getDateselect.map((item, index) => {
            return (
              <div className="auto-main" key={index}>
                <div className="auto-date">{item.date}</div>
                <div className="auto-date">{item.dayNumber}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SelectTimeAuto;
