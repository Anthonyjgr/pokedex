import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 w-full bg-primary h-[100px] text-xs md:text-[16px] px-2">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2  bg-white hover:bg-red-200 disabled:bg-primary text-primary rounded-lg"
      >
        {"<<First"}
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2  bg-white hover:bg-red-200 disabled:bg-primary text-primary rounded-lg"
      >
        {"<Prev"}
      </button>
      <span className="text-white text-xs">
        {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2  bg-white hover:bg-red-200 disabled:bg-primary text-primary rounded-lg"
      >
        {"Next>"}
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2  bg-white hover:bg-red-200 disabled:bg-primary text-primary rounded-lg"
      >
        {"Last>>"}
      </button>
    </div>
  );
};

export default Pagination;
