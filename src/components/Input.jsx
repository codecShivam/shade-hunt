import React from "react";
import colorNames from "colornames";

const Input = ({ colorValue, setColorValue , setHexValue}) => {
  return (
    <div>
      <form
        className=""
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="hidden" htmlFor="colorValue">
          Add Color Name
        </label>
        <input
          className="w-96 p-2 border-2  rounded border-slate-500 ring-4 focus:ring-4 focus:outline-none focus:ring-slate-200 ring-slate-200 mt-2"
          autoFocus
          type="text"
          placeholder=" Add color name"
          required
          value={colorValue}
          onChange={(e) =>{ 
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
           }}
        />
      </form>
    </div>
  );
};

export default Input;
