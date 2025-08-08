import { useState } from "react";
import React from "react";

import './../styles/App.css';


const App = () => {
  const [count,useCount]=useState(0)
const handleClick = () =>{
useCount(count+1)
  }
  return (
    <div>
      <p >Button clicked {count} items</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
