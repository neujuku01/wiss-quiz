import { useState } from 'react';

function Counter({ startwert, schritt, titel }) {
  const [count, setCount] = useState(startwert);
  const [istSichtbar, setIstSichtbar] = useState(true);

  const erhoehen = () => {
    setCount(count + schritt);
  };

  const verringern = () => {
    setCount(count - schritt);
  };

  const reset = () => {
    setCount(startwert);
  };
  
  const toggle = () => {
    setIstSichtbar(!istSichtbar);
  };

  return (
    <div>
      <button onClick={toggle}>
        {istSichtbar ? 'Counter verstecken' : 'Counter anzeigen'}
      </button>

      {istSichtbar && (
        <div>
          <h2>{titel}</h2>
          <p>Aktueller Zähler: {count}</p>
          <button onClick={erhoehen}>+{schritt}</button>
          <button onClick={verringern}>-{schritt}</button>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default Counter;