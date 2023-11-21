import logoImage from './assets/Group.svg'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function App() {

  return (
    <div className="flex items-center">
    <p className="mr-2">Your</p>
    <img src={logoImage} alt="Logo" className="w-8 h-8 bg-blue-300" />
    <p className="ml-2">Word</p>

    <div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  </div>
  )
}

export default App
