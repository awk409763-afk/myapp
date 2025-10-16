import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="title">React Counter</h1>

      <div className="display">{count}</div>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)} className="btn increase">
          +
        </button>
        <button onClick={() => setCount(count - 1)} className="btn decrease">
          -
        </button>
        <button onClick={() => setCount(0)} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;