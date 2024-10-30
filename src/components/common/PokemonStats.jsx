import React from "react";
import getColorHex from "../../utils/getColor";

const PokemonStats = ({ stats, color }) => {
  // Get the primary color in hex format to use across bars
  const bgColor = getColorHex(color);
  // Define the max stat value for calculating percentage widths
  const maxStat = 255;

  return (
    <section className="flex flex-col gap-4 items-end justify-center w-full">
      {/* Section Title */}
      <span className={`text-center text-${color}-light text-lg font-semibold w-full`}>
        Base Stats
      </span>

      {/* Container for all stats content */}
      <div className="w-full flex flex-row items-center justify-center h-[120px] gap-2">
        {/* Stats Label Column */}
        <div
          className={`flex flex-col items-end justify-between h-full text-md leading-3 text-${color}-light font-semibold`}
        >
          <span>HP</span>
          <span>ATA</span>
          <span>DEF</span>
          <span>S.ATK</span>
          <span>S.DEF</span>
          <span>SPEED</span>
        </div>

        {/* Divider Bar */}
        <div className="w-[2px] h-full bg-gray-400 dark:bg-gray-200"></div>

        {/* Stats Numeric Values */}
        <div className="flex flex-col items-center justify-between h-full">
          {stats?.map((stat, index) => (
            <span key={index} className={`text-md font-semibold leading-3 text-gray-500 dark:text-gray-200`}>
              {stat.base_stat}
            </span>
          ))}
        </div>

        {/* Stats Bars Section */}
        <div className="flex flex-col w-full items-center justify-between gap-4 h-full">
          {/* Map through each stat to render an individual progress bar */}
          <div className="flex flex-col items-center justify-between w-full h-full">
            {stats?.map((stat, index) => {
              // Calculate stat width as a percentage of the maximum stat (255)
              const statWidth = Math.min((stat.base_stat / maxStat) * 100, 100);
              return (
                <div
                  key={index}
                  className="w-full h-[8px] relative rounded-full bg-transparent"
                >
                  {/* Foreground Bar with Actual Stat Percentage */}
                  <div
                    style={{ width: `${statWidth}%`, backgroundColor: bgColor }}
                    className="absolute top-0 left-0 h-full z-20 rounded-full transition-all duration-500"
                  ></div>
                  
                  {/* Background Bar with Lighter Opacity */}
                  <div
                    style={{ backgroundColor: bgColor, opacity: 0.3 }}
                    className="absolute top-0 left-0 w-full h-full z-10 rounded-full transition-all duration-500"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonStats;

