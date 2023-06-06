import React from "react";

const Input = ({ colorValue, setColorValue }) => {
  
  return (
    <div>
      <form
        className="flex w-screen flex-row justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="hidden" htmlFor="colorValue">
          Add Color Name
        </label>
        <input
          className="w-96 p-4"
          autoFocus
          type="text"
          placeholder=" Add color name"
          required
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
