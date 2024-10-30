// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 w-full bg-primary h-[100px] relative">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white hover:bg-red-200 disabled:bg-primary text-primary rounded-lg"
      >
        {"<<<Prev"}
      </button>
      <span className="text-white">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white hover:bg-red-200 disabled:bg-primary text-primary rounded-lg"
      >
        {"Next>>>"}
      </button>
      {/* <div className="absolute  w-[100px] h-[20px] top-0 bg-gray-100 rounded-b-lg"></div> */}
    </div>
  );
};

export default Pagination;
