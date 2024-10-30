import React from "react";

function PokemonDimensions({ weight, height, textColor, isDark }) {
  const weightInKg = weight / 10;
  const heightInMeters = height / 10;

  const weightIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.28333 13.0003H13.05L12 5.66699H5.33333L4.28333 13.0003ZM8.66667 4.66699C8.95556 4.66699 9.19444 4.56977 9.38333 4.37533C9.57222 4.18088 9.66667 3.94477 9.66667 3.66699C9.66667 3.3781 9.57222 3.13921 9.38333 2.95033C9.19444 2.76144 8.95556 2.66699 8.66667 2.66699C8.38889 2.66699 8.15278 2.76144 7.95833 2.95033C7.76389 3.13921 7.66667 3.3781 7.66667 3.66699C7.66667 3.94477 7.76389 4.18088 7.95833 4.37533C8.15278 4.56977 8.38889 4.66699 8.66667 4.66699ZM10.4 4.66699H12C12.2556 4.66699 12.4778 4.74755 12.6667 4.90866C12.8556 5.06977 12.9667 5.2781 13 5.53366L14.0333 12.867C14.0778 13.167 14.0028 13.4309 13.8083 13.6587C13.6139 13.8864 13.3611 14.0003 13.05 14.0003H4.28333C3.97222 14.0003 3.71945 13.8864 3.525 13.6587C3.33056 13.4309 3.25556 13.167 3.3 12.867L4.33333 5.53366C4.36667 5.2781 4.47778 5.06977 4.66667 4.90866C4.85556 4.74755 5.07778 4.66699 5.33333 4.66699H6.93333C6.84444 4.51144 6.77778 4.3531 6.73333 4.19199C6.68889 4.03088 6.66667 3.85588 6.66667 3.66699C6.66667 3.11144 6.86111 2.63921 7.25 2.25033C7.63889 1.86144 8.11111 1.66699 8.66667 1.66699C9.22222 1.66699 9.69444 1.86144 10.0833 2.25033C10.4722 2.63921 10.6667 3.11144 10.6667 3.66699C10.6667 3.85588 10.6444 4.03088 10.6 4.19199C10.5556 4.3531 10.4889 4.51144 10.4 4.66699ZM4.28333 13.0003H13.05H4.28333Z"
        fill={isDark ? "white" : "gray"}
      />
    </svg>
  );

  const ruleIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 2.33301C4.5 2.06634 4.6 1.83301 4.8 1.63301C5 1.43301 5.23333 1.33301 5.5 1.33301L11.5 1.33301C11.7556 1.33301 11.9861 1.43301 12.1917 1.63301C12.3972 1.83301 12.5 2.06634 12.5 2.33301V13.6663C12.5 13.933 12.3972 14.1663 12.1917 14.3663C11.9861 14.5663 11.7556 14.6663 11.5 14.6663H5.5C5.23333 14.6663 5 14.5663 4.8 14.3663C4.6 14.1663 4.5 13.933 4.5 13.6663V2.33301ZM5.5 2.33301L5.5 13.6663H11.5V11.4997H8.5V10.4997H11.5V8.49967H8.5V7.49967H11.5V5.49967H8.5V4.49967H11.5V2.33301L5.5 2.33301ZM8.5 4.49967V5.49967V4.49967ZM8.5 7.49967V8.49967V7.49967ZM8.5 10.4997V11.4997V10.4997Z"
        fill={isDark ? "white" : "black"}
      />
    </svg>
  );

  return (
    <div className="flex-row-center h-[80px] gap-4">
      <div className="flex-col-center gap-4">
        <div className="flex-row-center gap-2">
          {weightIcon}
          <span className="text-gray-500 dark:text-gray-200">{weightInKg + " Kg"}</span>
        </div>
        <span className={`${textColor} text-xs text-center`}>Weight</span>
      </div>
      {/* DIVISION LINE */}
      <div className="h-full w-[1px] bg-gray-300"></div>
      <div className="flex-col-center gap-4">
        <div className="flex-row-center gap-2">
          {weightIcon}
          <span className="text-gray-500 dark:text-gray-200">{heightInMeters + " m"}</span>
        </div>
        <span className={`${textColor} text-xs text-center`}>Weight</span>
      </div>
    </div>
  );
}

export default PokemonDimensions;
