import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInput]=useState(0);

  const [outputValue, setOutput]=useState(0);


  function resetInput(){
    setInput(0);
  }

  function add(){
    const res= Number(outputValue) + Number(inputValue);
    setOutput(res);
    setInput(0);
   
  }

  function subtract(){
    const res= Number(outputValue) - Number(inputValue);
    setOutput(res);
    setInput(0);
  }

  function Multiply(){
    const res= Number(outputValue) * Number(inputValue);
    setOutput(res);
    setInput(0);
  }

  function divide(){
    const res= Number(outputValue) / Number(inputValue);
    setOutput(res);
    setInput(0);
  }
  

  return (
    <div className="App">
      <h1>Simple Calculator:</h1>
      <br />
      <div className="form">
        <label>Input </label>
        <input type="number" placeholder="enter number" id="inputValue" value={inputValue} onChange={(e)=> setInput(e.target.value)}/>
      </div>
      <br />
      <div className="output">
        <label>Output </label>
        <input type="number" id="outputValue" value={outputValue} readOnly/>
      </div>

      <br/>

      <div className="result">
        <button type="button" onClick={add}>+</button>
        <button type="button" onClick={subtract}>-</button>
        <button type="button" onClick={Multiply}>*</button>
        <button type="button" onClick={divide}>/</button>

        <button type="button" onClick={resetInput}>Reset Input</button>
        <button type="button" onClick={() => setOutput(0)}>Reset Output</button>
      </div>

    </div>
  );
}

export default App;
