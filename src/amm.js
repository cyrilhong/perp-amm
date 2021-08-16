function amm(arg){
    if(arg.inputUSD){
        let tempStoreTWD = 0
        let tempStoreUSD = arg.storeUSD + arg.inputUSD
        tempStoreTWD = arg.k/tempStoreUSD
        return(
            {
                storeUSD:tempStoreUSD,
                storeTWD : tempStoreTWD,
                val: (tempStoreTWD - arg.storeTWD),
                currency: "TWD"
            }
        )
    }else if(arg.inputTWD){
      // debugger
        let tempStoreUSD = 0
        let temStoreTWD = arg.storeTWD + arg.inputTWD
        tempStoreUSD = arg.k/temStoreTWD
        return(
            {
                storeTWD: temStoreTWD,
                storeUSD: arg.k/temStoreTWD,
                val: (tempStoreUSD - arg.storeUSD),
                currency: "USD"
            }
        )
    }
}

export default amm;