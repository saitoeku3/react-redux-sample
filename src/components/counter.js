import React, { useState } from 'react'

const Counter = ({ count, decrement, increment, setCount }) => {
  const [localCount, SetLocalCount] = useState(0)

  return (
    <div>
      <span>count: {count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <div>
        <input
          type="number"
          value={localCount}
          onChange={e => SetLocalCount(e.target.valueAsNumber)}
        />
        <button onClick={() => { setCount(localCount) }}>
          set
        </button>
      </div>
    </div>
  )
}

export default Counter
