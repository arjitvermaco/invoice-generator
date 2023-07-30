import React, { useState } from "react";
import CounterNumber from "./CounterNumber";
import Decoration from "./Decoration";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <CounterNumber count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <Decoration/>
    </main>
  );
}
