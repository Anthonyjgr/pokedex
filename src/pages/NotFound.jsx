import React from "react";
import Pokeball from "../components/common/Pokeball";

const NotFound = () => {
  return (
    <div className="w-screen h-full flex-col-center relative dark:bg-gray-700 ">
      <span className="w-full text-center text-2xl dark:text-white text-primary mt-10">Page not found</span>
      <div className="">
        <Pokeball />
      </div>
    </div>
  );
};

export default NotFound;
