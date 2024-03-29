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
// const PaymentForm = React.lazy(() => import("./PaymentForm"));
const Account = React.lazy(() => import("./AccounFlows/Account"));
const BookingDetail = React.lazy(() => import("./HotelFlows/BookingDetail"));
const FlightBooking = React.lazy(() => import("./FlightFlows/FlightBooking"));
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
          <Route path="/account" element={<Account />} />
          {/* <Route path="/paymentForm" element={<PaymentForm />} /> */}
          <Route path="/bookingDetail" element={<BookingDetail />} />
          <Route path="/flightBooking" element={<FlightBooking />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/hotelListing" element={<HotelListing />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
