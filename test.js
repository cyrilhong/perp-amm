import amm from './src/amm.js';
import assert from 'assert';
import 'mocha';
let arg = {
    storeUSD: 1000,
    storeTWD: 10000,
    inputUSD: parseInt(100),
    inputTWD: parseInt(0),
    k: 10000000
  }
beforeEach(async ()=>{
    console.log(arg)
});

describe('AMM', ()=>{
    it('allocate 100 USD, the k remains the same value',()=>{
        let result = amm(arg)
        // console.log(result)
        assert.equal((result.storeUSD*result.storeTWD) ,arg.k)
    });
});