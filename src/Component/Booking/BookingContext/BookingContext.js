import React, { Children, createContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [selectItem, setSelectItem] = useState([]);

  const calculateTotalPrice = () => {
    return selectItem.reduce((total, eachPrice) => total + eachPrice.price, 0);
  };
  return (
    <BookingContext.Provider value={{ selectItem, calculateTotalPrice }}>
      {children}
    </BookingContext.Provider>
  );
};
export default BookingContext;
