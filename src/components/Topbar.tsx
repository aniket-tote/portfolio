import React from "react";

const Topbar = () => {
  return (
    <div className="h-8 bg-[#15232d] border-b border-[#0d3a58] p-[0.375rem] flex justify-center">
      <div className="first flex-1 flex justify-end gap-2 items-center px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
      <div className="roundrect rounded-lg bg-[#122738] w-2/5 text-center flex items-center justify-center gap-1 text-sm font-light border border-[#0d3a58]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search "
        >
          <g transform="scale(-1, 1) translate(-24, 0)">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </g>
        </svg>
        <span className="text-xs">aniket portfolio</span>
      </div>
      <div className="second flex-1"></div>
    </div>
  );
};

export default Topbar;
