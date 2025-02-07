import { createSlice } from "@reduxjs/toolkit";
import nailStaff from "../Data/NailStaff";

const initialState = {
  selectItem: [],
  nailStaffs: nailStaff,
  selectStaffService: null,
  startDate: new Date(),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleClickItem: (state, action) => {
      const item = action.payload;
      const ItemExist = state.selectItem.some((i) => i.name === item.name);
      if (ItemExist) {
        state.selectItem = state.selectItem.filter((i) => i.name !== item.name);
      } else {
        state.selectItem.push(item);
      }
    },
    handleSelectStaff: (state, action) => {
      state.selectStaffService = action.payload;
    },
    // get start date
    handleSelectStartDate: (state, action) => {
      state.startDate = action.payload;
    },
  },
});

// get total price
export const getTotalPrice = (state) => {
  const totalPrice = state.counter.selectItem.reduce(
    (total, getPrice) => total + getPrice.price,
    0
  );
  return totalPrice;
};
// select staff working day
export const selectStaff = (state) => {
  const getCurretDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const getStaffWorkingDay = state.counter.nailStaffs.filter((staff) =>
    staff.workingDays.includes(getCurretDay)
  );
  return getStaffWorkingDay;
};

// Action creators are generated for each case reducer function
export const { handleClickItem, handleSelectStaff, handleSelectStartDate } =
  counterSlice.actions;

export default counterSlice.reducer;
