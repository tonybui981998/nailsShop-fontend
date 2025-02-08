import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingPage from "./Component/Page/BookingPage";
import BookingSelect from "./Component/Booking/BookingSlection/BookingSelect";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StaffPages from "./Component/Page/StaffPages";
import SelectTimePage from "./Component/Page/SelectTimePage";
import BookingConfirmHeader from "./Component/Booking/BookingConfirm/BookingConfirmHeader/BookingConfirmHeader";
import BookingConfirmation from "./Component/Page/BookingConfirmation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/5-star/Booking" element={<BookingPage />} />
          <Route path="/5-star/Booking/selection" element={<BookingSelect />} />
          <Route
            path="/5-star/Booking/selection/Referstaff"
            element={<StaffPages />}
          />
          <Route
            path="/5-star/Booking/selection/Referstaff/selecttime"
            element={<SelectTimePage />}
          />
          <Route
            path="/5-star/Booking/selection/Referstaff/selecttime/confirmation"
            element={<BookingConfirmation />}
          />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={4500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
