const bag = (input) => {
    input = input.split("\n").map((v) => v.split(" ").map(Number));
    const [maxSize, maxValue] = input.shift();
    const dpCheck = new Array(maxValue+1).fill(0);
    input.sort((a,b) => a[0]/a[1] - b[0]/b[1]);

    for(let i = 0; i < maxSize; i++){
        for(let j = input[i][0]; j <= maxValue; j++){
            if(dpCheck[j] < dpCheck[j-input[i][0]] + input[i][1] ){
                dpCheck[j] = dpCheck[j-input[i][0]] + input[i][1];
            }
        }
    }
    console.log(dpCheck.pop());
}

bag("4 11\n5 12\n3 8\n6 14\n4 8");