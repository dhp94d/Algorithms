const maxStone = (n, list) => {
    let checkArr = [];
    let checkHeight = [];
    let answer = 0;
    for(let i =0; i< n; i++){
        let max = 0;
        let height = 0;
        for(let j = 0; j < i; j++){
            if(list[i][0] < list[j][0] && list[i][2] < list[j][2] && max < checkArr[j]){
                console.log(i,j);
                max = checkArr[j];
                height = checkHeight[j];
            }
        }
        checkArr[i] = max + 1;
        checkHeight[i] = list[i][1] + height
    }
    console.log(checkArr, Math.max.apply(null, checkHeight));
}
//밑면, 높이, 무게
// 밑면 넓은게 아래
// 무게 무거운게 아래
maxStone(5,[[25,3,4],[4,4,6],[9,2,3],[16,2,5],[1,5,2]]);