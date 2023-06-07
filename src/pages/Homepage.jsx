import React from "react";
import Input from "../components/Input";
import Square from "../components/Square";
import bgImg from "../assets/bgImg.svg";
import { useState } from "react";

const Homepage = () => {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("")

  return (
    <div className="h-screen flex flex-col items-center justify-center"
    style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Square colorValue={colorValue} hexValue={hexValue} />
      <Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} />
    </div>
  );
};

export default Homepage;
