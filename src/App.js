import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [storeUSD, setStoreUSD] = useState(1000)
  const [storeTWD, setStoreTWD] = useState(10000)
  const [inputUSD, setInputUSD] = useState(0)
  const [inputTWD, setInputTWD] = useState(0)
  const k = storeUSD*storeTWD
  const [exchange, setExchange] = useState(0)
  useEffect(()=>{
    console.log(storeUSD);
    console.log(storeTWD);
    console.log(inputTWD);
    console.log(inputUSD);
  },[storeTWD,storeUSD,inputTWD,inputUSD,exchange])
  const amm = ()=>{
    const TWDInput = parseInt(inputTWD)
    const USDInput = parseInt(inputUSD)
    // debugger
    if(USDInput){
        let tempStoreTWD = 0
        let tempStoreUSD = storeUSD + USDInput
        setStoreUSD(tempStoreUSD)
        tempStoreTWD = k/tempStoreUSD
        setStoreTWD(tempStoreTWD)
        setExchange(Math.abs(tempStoreTWD - storeTWD))
    }else if(TWDInput){
      // debugger
        let tempStoreUSD = 0
        let temStoreTWD = storeTWD + TWDInput
        setStoreTWD(temStoreTWD)
        tempStoreUSD = k/temStoreTWD
        setStoreUSD(tempStoreUSD)
        setExchange(Math.abs(tempStoreUSD - storeUSD))
    }
  }
  const getInputUSD =(e)=>{
    let val = parseInt(e.target.value)
    console.log(val);
    // debugger
    setInputTWD(0)
    if(val<0){
      setInputUSD(0)
    }else{
      setInputUSD(val)
    }
  }

  const getInputTWD = (e)=>{
    let val = parseInt(e.target.value)
    console.log(val);
    // debugger
    setInputUSD(0)
    if(val<0){
      setInputTWD(0)
    }else{
      setInputTWD(val)
    }
  }
  const handleFocus = (e)=>{
    e.target.select()
  }

  return (
    <div className="App">
      <h1>storeTWD: {(storeTWD).toFixed(2)}</h1>
      <h1>storeUSD: {(storeUSD.toFixed(2))}</h1>
      <h1>Rate: {(storeTWD/storeUSD).toFixed(2)}</h1>
      <h3>USD</h3>
      <input value={inputUSD} onChange={(e)=>getInputUSD(e)} onFocus={(e)=>handleFocus(e)} type="number" step="1" min="0"/>
      <h3>TWD</h3>
      <input value={inputTWD} onChange={(e)=>{getInputTWD(e)}} onFocus={(e)=>handleFocus(e)} type="number" step="0.1" min="0"/>
      <br />
      <br />
      <button onClick={()=>{amm()}}>Exchang</button>
      {exchange==0?'':<h1>You get {inputUSD?'USD':'TWD'} {(exchange).toFixed(2)}</h1>}
    </div>
  );
}

export default App;
