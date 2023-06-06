import React from "react";

const Square = ({ colorValue }) => {
  return (
    <div className="w-screen h-[60vh] flex flex-row justify-center items-end">
      <div
        className="w-96 h-96 flex flex-row justify-center border-4 border-slate-200 shadow-gray-700 shadow-xl items-center"
        style={{ backgroundColor: colorValue }}
      >
        <p  className="">{colorValue ? colorValue : "Empty Value"}</p>
      </div>
    </div>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Name",
};

export default Square;
