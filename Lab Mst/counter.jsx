import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Increment
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage('');
    } else {
      setMessage('Limit reached!');
    }
  };

  // Decrement
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    }else{
      setMessage('Reached Zero')
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleDecrement}>- Decrement</button>
      <button onClick={handleIncrement} style={{ marginLeft: '10px' }}>
        + Increment
      </button>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

export default Counter;
