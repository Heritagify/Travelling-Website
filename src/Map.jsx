
import { Map, Marker } from '@googlemaps/react-wrapper';
import './index.css'; // Import your Tailwind CSS styles

function MyMarker() {
  return <Marker position={{ lat: 37.7749, lng: -122.4194 }} />;
}

function MyApp() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Map
        apiKey="YOUR_API_KEY"
        defaultZoom={8}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultOptions={{ disableDefaultUI: true }}
        className="rounded-lg shadow-md"
      >
        <MyMarker />
      </Map>
    </div>
  );
}

export default MyApp;
