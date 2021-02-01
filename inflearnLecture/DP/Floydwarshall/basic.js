const basic = (input) => {
    input = input.split("\n");
    const [cityNum, roadNum] = input.shift().split(" ").map(Number); 
    const data = input.map((v) => v.split(" ").map(Number));
    const dpMap = Array.from(Array(cityNum), () => Array(cityNum).fill(Number.MAX_VALUE));
    for(let i = 0; i < roadNum; i++){
        dpMap[data[i][0]-1][data[i][1]-1] = data[i][2];
    }
    for(let i =0; i < cityNum; i++){
        for(let j =0; j < cityNum; j++){
            if(i===j) dpMap[i][j] = 0;
            for(let k = 0; k < cityNum; k++){
                if(dpMap[i][j] > dpMap[i][k] + dpMap[k][j]){
                    dpMap[i][j] = dpMap[i][k] + dpMap[k][j];
                }
            }
        }
    }
    console.log(dpMap);
}
basic("5 8\n1 2 6\n1 3 3\n3 2 2\n2 4 1\n2 5 13\n3 4 5\n4 2 3\n4 5 7")