import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [storeUSD, setStoreUSD] = useState(1000)
  const [storeTWD, setStoreTWD] = useState(10000)
  const [inputUSD, setInputUSD] = useState(0)
  const [inputTWD, setInputTWD] = useState(0)
  const USDRef = useRef(null);
  const TWDRef = useRef(null);
  const k = storeUSD*storeTWD
  const [exchange, setExchange] = useState("")
  useEffect(()=>{
    console.log(storeUSD);
    console.log(storeTWD);
    console.log(inputTWD);
    console.log(inputUSD);
  },[storeTWD,storeUSD,inputTWD,inputUSD,exchange])
  const amm = ()=>{
    const TWDInput = parseInt(TWDRef.current.value)
    const USDInput = parseInt(USDRef.current.value)
    // debugger
    if(USDInput){
        let tempStoreTWD = 0
        let tempStoreUSD = storeUSD + USDInput
        setStoreUSD(tempStoreUSD)
        tempStoreTWD = k/tempStoreUSD
        setStoreTWD(tempStoreTWD)
        setExchange(" TWD:"+ Math.abs(tempStoreTWD - storeTWD))
    }else if(TWDInput){
      // debugger
        let tempStoreUSD = 0
        let temStoreTWD = storeTWD + TWDInput
        setStoreTWD(temStoreTWD)
        tempStoreUSD = k/temStoreTWD
        setStoreUSD(tempStoreUSD)
        setExchange(" USD:" + Math.abs(tempStoreUSD - storeUSD))
    }
  }
  const getInputTWD =async(e)=>{
    // let val = parseInt(e.target.value)
    // console.log(val);
    // debugger
    // if(val<0){
    //   await setInputTWD(0)
    // }else{
    //   await setInputTWD(val)
    // }
  }

  return (
    <div className="App">
      <h1>storeTWD: {storeTWD}</h1>
      <h1>storeUSD: {storeUSD}</h1>
      <h1>Rate: {storeTWD/storeUSD}</h1>
      <h3>USD</h3>
      <input ref={USDRef} type="number" step="1" min="0"/>
      <h3>TWD</h3>
      <input ref={TWDRef} type="number" step="0.1" min="0"/>
      <br />
      <br />
      <button onClick={()=>{amm()}}>Exchang</button>
      <h1>You get {exchange}</h1>
    </div>
  );
}

export default App;
