import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div data-testid="result">{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}
