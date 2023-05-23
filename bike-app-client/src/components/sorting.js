import React from 'react';

const SortButton = ({ column, sortedBy, sortDirection, handleSort, children }) => {
  const handleClick = () => {
    handleSort(column);
  };

  return (
    <th onClick={handleClick} className={sortedBy === column ? `sorted ${sortDirection}` : ''}>
      {children}
    </th>
  );
};

export default SortButton;
