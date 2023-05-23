import React, { useEffect, useState } from 'react';
import '../styles/listView.css';
import Pagination from './pagination';
import SortButton from './sorting';

function JourneysPage() {
  const [journeys, setJourneys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [journeysPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetchJourneys();
  }, []);

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

  const indexOfLastJourney = currentPage * journeysPerPage;
  const indexOfFirstJourney = indexOfLastJourney - journeysPerPage;
  const currentJourneys = isSearching
    ? journeys.filter(
        (journey) =>
          journey.departure_station_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          journey.return_station_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : journeys.slice(indexOfFirstJourney, indexOfLastJourney);
  const totalPages = Math.ceil((isSearching ? currentJourneys.length : journeys.length) / journeysPerPage);

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
      setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortedBy(column);
      setSortDirection('asc');
    }
  };

  const sortedJourneys = currentJourneys.sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortedBy] > b[sortedBy] ? 1 : -1;
    } else {
      return a[sortedBy] < b[sortedBy] ? 1 : -1;
    }
  });

  return (
    <div>
      <h1>Journey List</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      </div>
      {journeys.length === 0 ? (
        <p>Loading journeys...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <SortButton
                column="departure_station_name"
                sortedBy={sortedBy}
                sortDirection={sortDirection}
                handleSort={handleSort}
              >
                Departure
              </SortButton>
              <SortButton
                column="return_station_name"
                sortedBy={sortedBy}
                sortDirection={sortDirection}
                handleSort={handleSort}
              >
                Return Station
              </SortButton>
              <SortButton
                column="covered_distance"
                sortedBy={sortedBy}
                sortDirection={sortDirection}
                handleSort={handleSort}
              >
                Covered Distance(km)
              </SortButton>
              <SortButton
                column="duration"
                sortedBy={sortedBy}
                sortDirection={sortDirection}
                handleSort={handleSort}
              >
                Duration(min)
              </SortButton>
            </tr>
          </thead>
          <tbody>
            {sortedJourneys.map((journey) => (
              <tr key={journey.id}>
                <td>{journey.departure_station_name}</td>
                <td>{journey.return_station_name}</td>
                <td>{journey.covered_distance}</td>
                <td>{journey.duration}</td>
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

export default JourneysPage;
