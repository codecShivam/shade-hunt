import React from "react";

const Square = ({ colorValue, hexValue }) => {
  return (
    <div>
      <div
        className="w-80 sm:m-0 m-4 rounded-xl flex flex-col justify-center  h-80 border-4 border-slate-200 shadow-gray-700 shadow-xl items-center"
        style={{ backgroundColor: colorValue ? colorValue : "white" }}
      >
        <p
          className={`${
            colorValue === "black" ? "text-white" : "text-black"
          } text-xl font-mono tracking-tight font-semibold`}
        >
          {colorValue ? colorValue.toUpperCase() : "Empty Value"}
        </p>
        <p
          className={`${
            colorValue === "black" ? "text-white" : "text-black"
          } text-xl font-mono tracking-tight font-semibold`}
        >
          {hexValue ? hexValue : null}
        </p>
      </div>
    </div>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Name",
};

export default Square;
