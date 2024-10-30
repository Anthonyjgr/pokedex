import React, { useEffect, useState } from "react";
import getColorHex from "../../utils/getColor";

const PokemonStats = ({ stats, color }) => {
  const bgColor = getColorHex(color); // Obtiene el color en formato hex

  return (
    <section className="flex flex-col gap-4 items-end justify-center w-full">
      <span className={`text-center text-${color}-light text-lg font-semibold w-full`}>
        Base Stats
      </span>
      {/* STATS NAME CONTAINER */}
      <div className="w-full flex flex-row items-center justify-center h-[120px] gap-2">
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
        {/* DIVISION BAR */}
        <div className="w-[2px] h-full bg-gray-400 dark:bg-gray-200"></div>
        {/* STATS NUMBER SECTION */}
        <div className="flex flex-col items-center justify-between h-full">
          {stats?.map((stat, index) => (
            <span className={`text-md font-semibold leading-3 text-gray-500 dark:text-gray-200`}>
              {stat.base_stat}
            </span>
          ))}
        </div>
        {/* STATS BAR SECTION */}
        <div className="flex flex-col w-full items-center justify-between gap-4 h-full">
          <div className="flex flex-col items-center justify-between w-full h-full">
            {stats?.map((stat, index) => (
              <div
                key={index}
                className="w-full h-[8px] relative rounded-full bg-transparent"
              >
                <div
                  style={{ width: `${stat?.base_stat}%`, backgroundColor: bgColor }}
                  className="absolute top-0 left-0 h-full z-20 rounded-full transition-all duration-500"
                ></div>
                <div
                  style={{ backgroundColor: bgColor, opacity: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full z-10 rounded-full transition-all duration-500"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonStats;


