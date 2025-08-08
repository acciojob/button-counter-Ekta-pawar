import React, { useState } from 'react';

const ButtonCounter = () => {
     const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1); // Increment count
    };

   
    return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
};

export default ButtonCounter;