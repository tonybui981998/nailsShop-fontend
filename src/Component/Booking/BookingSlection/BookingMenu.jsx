import React, { useState } from "react";
import menuData from "../../Data/BookingData";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "./BookingMenu.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useBookingLogic from "../BookingLogic/useBookingLogic";

const BookingMenu = () => {
  const navigate = useNavigate();
  const { openMenu, activeMenu, TotalPrice, handleClickItem, selectItem } =
    useBookingLogic();
  // booking Validation
  console.log("check select Item ", selectItem);
  const Validation = () => {
    if (selectItem.length === 0) {
      toast.info("Please slect any service to continue");
    } else {
      navigate("/5-star/Booking/selection/Referstaff");
    }
  };
  return (
    <div className="BookingMenu">
      <div className="main-menu">
        {menuData &&
          menuData.map((item, index) => {
            return (
              <>
                <div className="menu-main" key={index}>
                  <div className="title" onClick={() => openMenu(index)}>
                    <div className="title-display">
                      {item.title}{" "}
                      {activeMenu === index ? (
                        <CiCircleMinus />
                      ) : (
                        <CiCirclePlus />
                      )}
                    </div>
                  </div>
                  {activeMenu === index &&
                    item.options.map((item, index) => {
                      return (
                        <div key={index} className="menu-option">
                          <label className="item" style={{ cursor: "pointer" }}>
                            <input
                              type="checkbox"
                              checked={selectItem.some(
                                (selected) => selected.name === item.name
                              )}
                              onChange={() => handleClickItem(item)}
                              disabled={item.price === null}
                            />
                            <span>
                              {item.name}{" "}
                              {item.price !== null
                                ? `$${item.price}`
                                : "(Price Varies)"}
                            </span>
                          </label>
                          <div className="items">{item.time} mins</div>
                        </div>
                      );
                    })}
                </div>
              </>
            );
          })}
      </div>
      <div className="display-Price">
        <p>
          Please make one booking per person. If there's more than one person,
          make separate bookings for everyone in your group, or give us a call
          or message. If you need your nails removed at your appointment, please
          select this as a service.
        </p>
        <div className="line"></div>

        {selectItem &&
          selectItem.map((item, index) => {
            return (
              <>
                <div className="main-slected" key={index}>
                  <div>
                    {item.name} for ${item.price}
                  </div>
                </div>
              </>
            );
          })}
        <div className="line"></div>
        <div className="total-price">Total Price: ${TotalPrice}</div>
        <div
          onClick={() => Validation()}
          className="continuebutton"
          to={"5-star/Booking/selection"}
        >
          <div> Continue</div>
        </div>
      </div>
    </div>
  );
};

export default BookingMenu;
