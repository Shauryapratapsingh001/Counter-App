import React, { useState } from 'react'
import '../CounterApp/chapterTwo.css'

const chapterTwo = () => {

  let [count, setCount] = useState(0)

  function increase() {
    setCount (count + 1)
  }

  function decrease() {
    if(count !== 0){
      setCount (count - 1) 
       
      }
  }
  return (
    <>
      <div className="show">
        <h1>Counter App</h1>

       <p>count: {count}</p>
      </div>
      <div className='btns'>
        <button onClick={increase}>➕Increment</button>
        <button onClick={decrease}>➖Decrement</button>
        <button onClick={() => {setCount(0)}}>🔃Reset</button>
      </div>

    </>
  )
}

export default chapterTwo;
