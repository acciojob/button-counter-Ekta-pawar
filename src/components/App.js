import { useState } from "react";
import React from "react";


const App = () => {
  const [count,useCount]=useState(0)
const handleClick = () =>{
useCount(count+1)
  }
  return (
    <div>
      <p >Button clicked  {count} {count === 1 ? 'time' : 'times'}</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
