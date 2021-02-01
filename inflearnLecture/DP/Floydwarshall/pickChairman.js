const pickChairman = (input) => {
    input = input.split("\n");
    input.pop();
    let min = 1000;
    let answer = [[],[]];
    const memberNum = Number(input.shift());
    const memberRelationship = input.map((v) => v.split(" ").map(Number));
    const dpMap = Array.from(Array(memberNum), () => Array(memberNum).fill(51));
    const result = [];
    for(let count in dpMap){
        dpMap[count][count] = 0;
    }
    for(let Relationship of memberRelationship){
        dpMap[Relationship[0]-1][Relationship[1]-1] = 1;
        dpMap[Relationship[1]-1][Relationship[0]-1] = 1;
    }

    for(let x =0; x < memberNum; x++){
        for(let y = 0; y < memberNum; y++){
            for(let z = 0; z < memberNum; z++){
                if(dpMap[x][y] > dpMap[x][z] + dpMap[z][y]){
                    dpMap[x][y] = dpMap[x][z] + dpMap[z][y];
                }
            }
        }
        let temp = Math.max.apply(null,dpMap[x]);
        if(temp < min) min = temp;
        result.push(temp);
    }
    answer[0].push(min);
    for(let i in result){
        if(result[i] === min){
            answer[0][1] ? answer[0][1] += 1 : answer[0][1] = 1;
            answer[1].push(Number(i)+1);
        }
    }
    console.log(answer);
}

pickChairman("5\n1 2\n2 3\n3 4\n4 5\n2 4\n5 3\n-1 -1")