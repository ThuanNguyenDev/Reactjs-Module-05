import React from 'react'
import {useState}  from 'react';

export default function Caculation() {

    const [input, setInput] = useState(''); 
    const [result, setResult] = useState('');


    let handleInput = (value) => {
        setInput((prevInput) => prevInput + value);
      };
    
 
    let handleCalculate = () => {
        try {
          setResult(eval(input));
        } catch (error) {
          setResult('Error');
        }
      };
    
   
    let handleClear = () => {
        setInput('');
        setResult('');
      };


  return (


    <div className="calculator">
    <div className="display">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
    </div>
    <div className="buttons">
      <button onClick={() => handleInput('7')}>7</button>
      <button onClick={() => handleInput('8')}>8</button>
      <button onClick={() => handleInput('9')}>9</button>
      <button onClick={() => handleInput('+')}>+</button>
      <br></br>
      <button onClick={() => handleInput('4')}>4</button>
      <button onClick={() => handleInput('5')}>5</button>
      <button onClick={() => handleInput('6')}>6</button>
      <button onClick={() => handleInput('-')}>-</button>
      <br></br>
      <button onClick={() => handleInput('1')}>1</button>
      <button onClick={() => handleInput('2')}>2</button>
      <button onClick={() => handleInput('3')}>3</button>
      <button onClick={() => handleInput('*')}>*</button>
      <br></br>
      <button onClick={() => handleInput('0')}>0</button>
      <button onClick={() => handleInput('/')}>/</button>
      <button onClick={handleClear}>C</button>
      <button onClick={handleCalculate}>=</button>
    </div>
  </div>
);

}
