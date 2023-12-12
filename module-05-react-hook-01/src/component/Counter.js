import React from 'react'
import {useState} from 'react';

function Counter() {

    let [count,setCount] = useState(0);
    const handClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };
  return (
    <>

    Value is { count}
    <div>
        <button onClick = { handClick}> Increase</button>
    </div>
    </>
  
  );
}

export default Counter