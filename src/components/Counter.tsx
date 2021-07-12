import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = (numero: number = 1):void => {
    setCounter(counter + numero);
  }
  
  return (
    <div className="mt-5">
      <h1>Counter: useState</h1>
      <span>Value: {counter}</span>
      <br />
      <button className="btn btn-outline-primary mt-2" onClick={ () => increment() }>
        Increment +1
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={ () => increment(2) }>
        Increment +2
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={ () => setCounter(0) }>
        Reset
      </button>
    </div>
  )
}
