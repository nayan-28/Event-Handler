import { useState } from "react";

import "./App.css";

function App() {
  const handleClick = () => {
    alert("This is Click Button");
  };

  const handleClick2 = () => {
    alert("This is Click2 Button");
  };

  const addFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <div className="card">
        <h3>React Core concept</h3>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClick2}>Click 2</button>
        <button onClick={() => addFive(2)}>Add Five</button>
      </div>
    </>
  );
}

export default App;
