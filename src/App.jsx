import {BrowserRouter, Routes, Route } from "react-router-dom"// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import Map from './Map.jsx'
import Home from './Home'
import Login from './Login';
import Flights from './Flights';
import ForgotPassword from "./ForgotPassword";
import VerifyCode from "./VerifyCode";
import SetPassword from "./SetPassword";
import SignUp from "./SignUp"
import PaymentForm from "./PaymentForm";
import Account from "./AccountFlows/Account"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/flight" element={<Flights/>}></Route>
          <Route path="/forgottenPassword" element={<ForgotPassword/>}></Route>
          <Route path="/verifyCode" element={<VerifyCode/>}></Route>
          <Route path="/setPassword" element={<SetPassword/>}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/paymentForm" element={<PaymentForm/>}></Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
