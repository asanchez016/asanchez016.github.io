import React, { useState } from 'react'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-black'>Vite + React</h1>
      <div className="card text-red">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs text-white">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Hero
