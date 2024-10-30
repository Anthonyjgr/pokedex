import React from 'react'

const Loader = () => {
  return (
    <div
      role="status"
      className="w-screen h-screen flex items-center justify-center dark:bg-gray-900"
    >
      <span className="text-2xl text-gray-700 dark:text-gray-200">Loading...</span>
    </div>
  );
}

export default Loader