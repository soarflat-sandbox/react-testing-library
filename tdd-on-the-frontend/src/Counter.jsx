import React, { useState } from 'react';

export function Counter() {
  const [count] = useState(0);

  return <div data-testid="result">{count}</div>;
}
