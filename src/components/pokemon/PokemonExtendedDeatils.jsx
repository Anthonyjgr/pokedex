import React from "react";
import { textClasses } from "../../utils/helpers";

const PokemonExtendedDeatils = ({ extendedDetails, color }) => {
  //GETTING growth_rate VALUE TO DISPLAY LATER IN THE CODE
  const growth_rate = extendedDetails?.growth_rate?.name;
  //GETTING habitat VALUE TO DISPLAY LATER IN THE CODE
  const habitat = extendedDetails?.habitat?.name;

  const textColor = textClasses[color] || "text-gray-200";
  return (
    <div className="flex flex-row items-start h-[200px] gap-4 ">
      {/* Abilities Section */}
      <div className="flex flex-col items-center justify-start gap-4">
        {/* Section Title */}
        <span className="text-gray-500 dark:text-gray-200 text-2xl">Abilities</span>

        {/* Map through abilities array and display each ability name */}
        {extendedDetails?.abilities?.map((abi) => (
          <span
            className={`${textColor} text-md text-center`}
            key={abi?.ability?.name} // Unique key for each ability for React reconciliation
          >
            {abi?.ability?.name || "N/A"} {/* Fallback to "N/A" if name is unavailable */}
          </span>
        ))}
      </div>

      {/* Vertical Divider Line */}
      <div className="h-full w-[3px] rounded-full bg-gray-300"></div>

      {/* Growth Rate Section */}
      <div className="flex flex-col items-center justify-start gap-4">
        {/* Section Title */}
        <span className="text-gray-500 dark:text-gray-200 text-2xl">Growth Rate</span>

        {/* Display Growth Rate Value */}
        <span className={`${textColor} text-md text-center`}>
          {growth_rate || "N/A"} {/* Fallback to "N/A" if growth rate is unavailable */}
        </span>
      </div>

      {/* Vertical Divider Line */}
      <div className="h-full w-[3px] rounded-full bg-gray-300"></div>

      {/* Habitat Section */}
      <div className="flex flex-col items-center justify-start gap-4">
        {/* Section Title */}
        <span className="text-gray-500 dark:text-gray-200 text-2xl">Habitat</span>

        {/* Display Habitat Value */}
        <span className={`${textColor} text-md text-center`}>
          {habitat || "N/A"} {/* Fallback to "N/A" if habitat is unavailable */}
        </span>
      </div>
    </div>
  );
};

export default PokemonExtendedDeatils;
