const sliceNetworkLine = (input) =>{
    const dpArr = [0,1,2];
    for(let i =2; i <= input; i++){
        dpArr.push(dpArr[i-1] + dpArr[i]);
    }
    return dpArr[input];
}

console.log(sliceNetworkLine(7));