import React from 'react';
import Modal from './popupModal';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import stationIcon from '../images/station-icon.png';

const StationPopup = ({ station, onClose, totalJourneys, totalJourneysEnds, journeys  }) => {
    if (!station || !station.Name) {
      return null;
    }
  
    const { Name, Adress, Stad, Kapasiteet, x, y } = station;
    const averageDistance = calculateAverageDistance(station.ID);
    const averageDistanceEnd = calculateAverageDistanceEnd(station.ID);
  
    function calculateAverageDistance(stationId) {
      const journeysFromStation = journeys.filter(journey => journey.departure_station_id === stationId);
      const totalDistance = journeysFromStation.reduce((sum, journey) => sum + journey.covered_distance, 0);
      return totalDistance;
    }
  
    function calculateAverageDistanceEnd(stationId) {
      const journeysToStation = journeys.filter(journey => journey.return_station_id === stationId);
      const totalDistance = journeysToStation.reduce((sum, journey) => sum + journey.covered_distance, 0);
      const averageDistance = journeysToStation.length > 0 ? totalDistance / journeysToStation.length : 0;
      return averageDistance;
    }
    
    
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
        <p>{totalJourneys} trips started here and average distance: {averageDistance.toFixed(2)} km</p>
        <p>{totalJourneysEnds} trips have ended here and average distance: {averageDistanceEnd.toFixed(2)} km</p>
  
        <div className="map-container">
          <MapContainer center={[y, x]} zoom={13} style={{ height: '300px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={[y, x]} icon={customIcon} />
          </MapContainer>
        </div>
  
        <button onClick={onClose} className="close-button">Close</button>
      </Modal>
    );
  };
  
  export default StationPopup;
  