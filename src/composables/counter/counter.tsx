import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <input
        type="number"
        value={amount}
        name="amount"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};
