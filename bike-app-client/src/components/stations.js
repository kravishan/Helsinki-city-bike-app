import React, { useEffect, useState } from 'react';

function StationsPage() {
    const [stations, setStations] = useState([]);
    const [journeys, setJourneys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

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

    
      const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        setIsSearching(searchTerm !== '');
      };  
    
      
      
      return (
        <div>  
            <h1>Stations List</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      </div> 
    </div>
  );
}

export default StationsPage;          