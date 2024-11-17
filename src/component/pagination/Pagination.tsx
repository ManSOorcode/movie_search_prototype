import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const visiblePageNumbers = pageNumbers.slice(
    Math.max(currentPage - 3, 0),
    Math.min(currentPage + 2, totalPages)
  );

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={handlePrevious}
        className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-800 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {visiblePageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page
              ? "bg-blue-900 text-white"
              : "bg-gray-700 text-gray-100 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-800 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
