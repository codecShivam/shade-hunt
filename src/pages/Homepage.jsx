import React from "react";
import Input from "../components/Input";
import Square from "../components/Square";
import { useState } from "react";

const Homepage = () => {
  const [colorValue, setColorValue] = useState("");

  return (
    <div>
      <Square 
       colorValue={colorValue}
       />
      <Input 
       colorValue={colorValue} 
       setColorValue={setColorValue} 
      />
    </div>
  );
};

export default Homepage;
