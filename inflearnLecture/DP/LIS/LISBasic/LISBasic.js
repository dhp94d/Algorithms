const LIS = (n,nList) => {
    const checkArr = Array(n);
    let answer = 0;
    for(let i = 0; i < n; i++){
        let max = 0;
        for(let j =0; j < i; j++){
            if(nList[j] < nList[i] && checkArr[j] > max){
                max = checkArr[j];    
            }
        }
        if(answer < max+1) answer = max+1;
        checkArr[i] = max+1;
    }
    console.log(answer);
}

LIS(8,[6,3,7,8,6,2,9,4]);