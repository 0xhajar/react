import React, {useState} from 'react'

export default function Counter2() {
    const [count, setCount] = useState(0);
    const initialCount = 0;

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }
  return (
    <div>
        <h1>Counter is : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <div>
          <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    </div>
  )
}
