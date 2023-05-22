import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function StationsMap() {
  const [stations, setStations] = useState([]);
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/stations');
      const data = await response.json();
      setStations(data);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };

  useEffect(() => {
    if (stations.length > 0 && !mapInitialized) {
      const map = L.map('map', {
        center: [60.1658, 24.8403],
        zoom: 13,
        fullscreenControl: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);


      stations.forEach((station) => {
        const marker = L.marker([station.y, station.x]).addTo(map);
        marker.bindPopup(`<b>${station.Name}</b><br>${station.Adress}, ${station.Stad}<br>Capacity: ${station.Kapasiteet}`);
      });

      setMapInitialized(true);
    }
  }, [stations, mapInitialized]);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
}

export default StationsMap;
