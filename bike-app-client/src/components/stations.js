import React, { useEffect, useState } from 'react';

function StationsPage() {
    const [stations, setStations] = useState([]);
    const [journeys, setJourneys] = useState([]);

    useEffect(() => {
        fetchStations();
        fetchJourneys();
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
    
      const fetchJourneys = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/journeys');
          const data = await response.json();
          setJourneys(data);
        } catch (error) {
          console.error('Error fetching journeys:', error);
        }
      };  

    
    
      
      
      return (
        <div>   
    </div>
  );
}

export default StationsPage;          