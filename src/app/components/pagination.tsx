'use client'
import React from 'react';

interface PaginationProps {
  currentPage: number;  // The current page number
  totalPages: number;   // The total number of pages
  onPageChange: (pageNumber: number) => void;  // Function to handle page change
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Function to handle page change
  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber); // Pass the selected page to the parent component
  };

  // Create an array with the page numbers
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page Number Buttons */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={`px-4 py-2 rounded-lg ${
            number === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
