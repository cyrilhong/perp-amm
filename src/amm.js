function amm(arg){
    let storeTWD = 10000;
    let storeUSD = 1000;
    let k = storeTWD*storeUSD
    debugger
    if(!!arg.usd&&typeof(arg.usd)=="number"){
        storeUSD -= arg.usd
        storeTWD = k/storeUSD
        console.log(storeTWD);
        return storeTWD
    }else if(!!arg.twd&&typeof(arg.twd)=="number"){
        storeTWD -= arg.twd
        storeUSD = k/storeTWD
        console.log(storeUSD);
        return storeUSD
    }
}

export default amm;