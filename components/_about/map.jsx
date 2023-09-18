import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import classes from "./map";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';


function Map() {
  return (
    <MapContainer style={{width: "100%", height: "40rem", zIndex: "0" }} center={[41.915178978070266, 12.454046556860337]} zoom={30} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
      <Marker position={[41.915178978070266, 12.454046556860337]}>
        <Popup>
          Via della Giuliana, 80, 00195 Roma, Metropolitan City of Rome Capital, Italy
        </Popup>
      </Marker>
  </MapContainer>
  );
}

export default Map;