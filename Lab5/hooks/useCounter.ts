import { useState } from "react";

export function useCounter(
  initialValue = 0,
  min = -10,
  max = 10
) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(prev => (prev < max ? prev + 1 : prev));
  };

  const decrease = () => {
    setCount(prev => (prev > min ? prev - 1 : prev));
  };

  const clear = () => {
    setCount(initialValue);
  };

  return {
    count,
    increase,
    decrease,
    clear,
  };
}
