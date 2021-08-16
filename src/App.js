import './App.css';
import React, { useState, useEffect } from 'react';
import Amm from './amm'
import {Button, Container, Grid,Paper} from '@material-ui/core'

function App() {
  const [storeUSD, setStoreUSD] = useState(1000)
  const [storeTWD, setStoreTWD] = useState(10000)
  const [inputUSD, setInputUSD] = useState(0)
  const [inputTWD, setInputTWD] = useState(0)
  const k = storeUSD*storeTWD
  const [exchange, setExchange] = useState(0)
  useEffect(()=>{
    // console.log(storeUSD);
    // console.log(storeTWD);
    // console.log(inputTWD);
    // console.log(inputUSD);
  },[storeTWD,storeUSD,inputTWD,inputUSD,exchange])

  // const TWDInput = parseInt(inputTWD)
  // const USDInput = parseInt(inputUSD)
  let arg = {
    storeUSD: storeUSD,
    storeTWD: storeTWD,
    inputUSD: parseInt(inputUSD),
    inputTWD: parseInt(inputTWD),
    k: k
  }
  const amm = ()=>{
    let result = Amm(arg)
    if(result.currency =='USD'){
      setStoreUSD(result.storeUSD)
      setStoreTWD(result.storeTWD)
      setExchange(Math.abs(result.val))
    }else{
      setStoreUSD(result.storeUSD)
      setStoreTWD(result.storeTWD)
      setExchange(Math.abs(result.val))
    }
    // console.log(result);
  }
  // const amm = ()=>{
  //   // debugger
  //   if(USDInput){
  //       let tempStoreTWD = 0
  //       let tempStoreUSD = storeUSD + USDInput
  //       setStoreUSD(tempStoreUSD)
  //       tempStoreTWD = k/tempStoreUSD
  //       setStoreTWD(tempStoreTWD)
  //       setExchange(Math.abs(tempStoreTWD - storeTWD))
  //   }else if(TWDInput){
  //     // debugger
  //       let tempStoreUSD = 0
  //       let temStoreTWD = storeTWD + TWDInput
  //       setStoreTWD(temStoreTWD)
  //       tempStoreUSD = k/temStoreTWD
  //       setStoreUSD(tempStoreUSD)
  //       setExchange(Math.abs(tempStoreUSD - storeUSD))
  //   }
  // }
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
      <Container>
        <Grid spacing={12}>
          <Grid container>
            <Grid item xs={12}>
              <h1>The Vault</h1>
            </Grid>
            <Grid item xs={6}>
              <h2>Stored TWD: {(storeTWD).toFixed(2)}</h2>
            </Grid>
            <Grid item xs={6}>
              <h2>Stored USD: {(storeUSD.toFixed(2))}</h2>
            </Grid>
            <Grid item xs={12}>
              <h2>Rate: {(storeTWD/storeUSD).toFixed(2)}</h2>
            </Grid>
          </Grid>
          <hr/>
          <Grid container>
            <Grid item xs={12}>
              <h1>Enter numbers to exchange</h1>
            </Grid>
            <Grid item xs={6}>
              <h3>USD</h3>
              <input value={inputUSD} onChange={(e)=>getInputUSD(e)} onFocus={(e)=>handleFocus(e)} type="number" step="1" min="0"/>
            </Grid>
            <Grid item xs={6}>
            <h3>TWD</h3>
            <input value={inputTWD} onChange={(e)=>{getInputTWD(e)}} onFocus={(e)=>handleFocus(e)} type="number" step="0.1" min="0"/>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={()=>{amm()}}>Exchang</Button>
              {exchange==0?'':<h1>You get {inputUSD?'TWD':'USD'} {(exchange).toFixed(2)}</h1>}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
