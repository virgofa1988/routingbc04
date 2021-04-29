import { useState, useEffect } from "react";
import React from "react";

export default function UseStateDemo() {
  const [number, setnumber] = useState({ number: 0 });
  const tangNumber = () => {
    setnumber({ number: number.number + 1 });
  };

  return (
    <div>
      <h1>Number : {number.number}</h1>
      <button onClick={tangNumber}>Tang Number</button>
    </div>
  );
}
