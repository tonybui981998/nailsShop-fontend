import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  handleClickItem,
  handleSelectStaff,
  selectStaff,
} from "../../Redux/counterSlice";
import { getTotalPrice } from "../../Redux/counterSlice";

const useBookingLogic = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [openModel, setOpenModel] = useState(false);

  // from redux
  const dispatch = useDispatch();
  const { selectItem } = useSelector((state) => state.counter);
  const selectedStaff = useSelector(
    (state) => state.counter.selectStaffService
  );

  const TotalPrice = useSelector(getTotalPrice);
  const getstaff = useSelector(selectStaff);

  // open menu
  const openMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  // open model
  const getopenModel = () => {
    setOpenModel(true);
  };

  return {
    openMenu,
    activeMenu,
    TotalPrice,
    handleClickItem: (item) => dispatch(handleClickItem(item)),
    selectItem,
    getstaff,
    getopenModel,
    openModel,
    handleSelectStaff: (staff) => dispatch(handleSelectStaff(staff)),
    selectedStaff,
  };
};

export default useBookingLogic;
