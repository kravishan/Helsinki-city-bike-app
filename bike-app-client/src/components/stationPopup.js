import React from 'react';
import Modal from './popupModal';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import stationIcon from '../images/station-icon.png';

const StationPopup = ({ station, onClose}) => {
  if (!station || !station.Name) {
    return null;
  }

  const { Name, Adress, Stad, Kapasiteet, x, y } = station;

  const customIcon = L.icon({
    iconUrl: stationIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <Modal>
      <h2>{Name}</h2>
      <p>Address: {Adress}</p>
      <p>City: {Stad}</p>
      <p>Capacity: {Kapasiteet}</p>

      <div className="map-container">
        <MapContainer center={[y, x]} zoom={13} style={{ height: '300px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={[y, x]}/>
        </MapContainer>
      </div>

      <button onClick={onClose} className="close-button">Close</button>
    </Modal>
  );
};

export default StationPopup;
