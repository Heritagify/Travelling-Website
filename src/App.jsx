import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";
// import addUserToDatabase from '../Backend/addUserToDatabase.js';

const Home = React.lazy(() => import("./Home"));
const Login = React.lazy(() => import("./Login"));
const Flights = React.lazy(() => import("./Flights"));
const ForgotPassword = React.lazy(() => import("./ForgotPassword"));
const VerifyCode = React.lazy(() => import("./VerifyCode"));
const SetPassword = React.lazy(() => import("./SetPassword"));
const SignUp = React.lazy(() => import("./SignUp"));

const Account = React.lazy(() => import("./AccounFlows/Account"));
import UserAccount from "./AccounFlows/UserAcoount";
import PaymentMethod from "./AccounFlows/PaymentMethod";
import TicketsBookings from "./AccounFlows/history/TicketsBookings";
import FlightTicket from "./AccounFlows/history/FlightTicket";
import StayTicket from "./AccounFlows/history/StayTicket";

const BookingDetail = React.lazy(() => import("./HotelFlows/BookingDetail"));
const FlightBooking = React.lazy(() => import("./FlightFlows/FlightBooking"));
const FlightDetail = React.lazy(() => import("./FlightFlows/FlightDetail"));
const Favorites = React.lazy(() => import("./HotelFlows/Favorite"));
const HotelListing = React.lazy(() => import("./HotelFlows/HotelListing"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flight" element={<Flights />} />
          <Route path="/forgottenPassword" element={<ForgotPassword />} />
          <Route path="/verifyCode" element={<VerifyCode />} />
          <Route path="/setPassword" element={<SetPassword />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="account" element={<Account />} />
            <Route path="userAccount" element={<UserAccount />} />
            <Route path="history" element={<TicketsBookings />}>
              <Route path="flightTicket" element={<FlightTicket />} />
              <Route path="stayTicket" element={<StayTicket />} />
            </Route>
            <Route path="paymentMethod" element={<PaymentMethod />} >
          </Route>
          {/* <Route path="/paymentForm" element={<PaymentForm />} /> */}
          <Route path="/bookingDetail" element={<BookingDetail />} />
          <Route path="/flightBooking" element={<FlightBooking />} />
          <Route path="/flightDetail" element={<FlightDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/hotelListing" element={<HotelListing />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
