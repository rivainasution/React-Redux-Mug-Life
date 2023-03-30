import React from 'react';
import { Pagination } from 'react-bootstrap';

function Paginations({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <Pagination className='justify-content-center'> 
      {currentPage > 1 && (
        <Pagination.Prev onClick={() => handleClick(currentPage - 1)} />
      )}
      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handleClick(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
      {currentPage < totalPages && (
        <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
      )}
    </Pagination>
  );
}

export default Paginations;
