import React from 'react';

function Pagination({ currentPage, totalPages, goToFirstPage, goToPreviousPage, goToNextPage, goToLastPage }) {
  return (
    <div className="pagination">
      <button onClick={goToFirstPage} disabled={currentPage === 1}>
        First
      </button>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
      <button onClick={goToLastPage} disabled={currentPage === totalPages}>
        Last
      </button>
      <div className="page-info">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}

export default Pagination;
