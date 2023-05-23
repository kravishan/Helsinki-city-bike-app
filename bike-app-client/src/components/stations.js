import React, { useEffect, useState } from 'react';
import '../styles/listView.css';
import Pagination from './pagination';
import SortButton from './sorting';

function StationsPage() {
  const [stations, setStations] = useState([]);
  const [journeys, setJourneys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [stationsPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
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
    setCurrentPage(1);
  };

  const indexOfLastStation = currentPage * stationsPerPage;
  const indexOfFirstStation = indexOfLastStation - stationsPerPage;
  const currentStations = isSearching
    ? stations.filter((station) => station.Name.toLowerCase().includes(searchTerm.toLowerCase()))
    : stations.slice(indexOfFirstStation, indexOfLastStation);
  const totalPages = Math.ceil((isSearching ? currentStations.length : stations.length) / stationsPerPage);

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleSort = (column) => {
    if (sortedBy === column) {
      // If already sorted by the same column, toggle the sort direction
      setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortedBy(column);
      setSortDirection('asc');
    }
  };

  const sortedStations = currentStations.sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortedBy] > b[sortedBy] ? 1 : -1;
    } else {
      return a[sortedBy] < b[sortedBy] ? 1 : -1;
    }
  });
  
  return (
    <div>
      <h1>Stations List</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      </div>
      {stations.length === 0 ? (
        <p>Loading stations...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <SortButton
                column="Name"
                sortedBy={sortedBy}
                sortDirection={sortDirection}
                handleSort={handleSort}
              >
                Name
              </SortButton>
              <SortButton
                column="Stad"
                sortedBy={sortedBy}
                sortDirection={sortDirection}
                handleSort={handleSort}
              >
                City
              </SortButton>
              <SortButton
                column="Kapasiteet"
                sortedBy={sortedBy}
                sortDirection={sortDirection}
                handleSort={handleSort}
              >
                Capacity
              </SortButton>
            </tr>
          </thead>
          <tbody>
            {sortedStations.map((station) => (
              <tr key={station.ID}>
                <td>{station.Name}</td>
                <td>{station.Stad}</td>
                <td>{station.Kapasiteet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!isSearching && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToFirstPage={goToFirstPage}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          goToLastPage={goToLastPage}
        />
      )}
    </div>
  );
}

export default StationsPage;
