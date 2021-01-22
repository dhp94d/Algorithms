const maxLine = (n, list) => {
    let checkArr = new Array(n);
    let answer = 0;
    for(let i =0; i< n; i++){
        let max = 0;
        for(let j = 0; j < i; j++){
            if(list[i] > list[j] && checkArr[j] > max){
                max = checkArr[j];
            }
        }
        if(answer < max+1) answer = max+1;
        checkArr[i] = max+1;
    }
    console.log(answer);
}

maxLine(10,[4,1,2,3,9,7,5,6,10,8]);