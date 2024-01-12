import {BrowserRouter, Routes, Route } from "react-router-dom"// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import Map from './Map.jsx'
import Home from './Home'
import Login from './Login';
import Flights from './Flights'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/flight" element={<Flights/>}></Route>
    </Routes>
  {/* <Map/> */}
  {/* <Login/> */}
  {/* <Home/> */}
    </BrowserRouter>
  );
}

export default App;
