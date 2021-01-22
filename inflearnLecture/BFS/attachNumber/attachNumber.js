const attachNumber = (input) => {
    input = input.split("\n");
    const length = Number(input.shift());
    const board = input.map((v) => v.split("").map(Number));
    const board2 = input.map((v) => v.split("").map(Number));
    const checkBoard = Array.from((Array(length)), () => Array(length).fill(0));
    const checkBoard2 = Array.from((Array(length)), () => Array(length).fill(0));
    const dfsresult = [];
    const bfsResult = [];
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    let cnt = 0;
    let pushNumber = 1;
    let pushNumber2 = 1;

    const dfs = (y,x) => {
        board[y][x] = 0;
        checkBoard[y][x] = pushNumber;
        cnt++;
        for(let i = 0; i < 4; i++){
            const getX = x+ dx[i];
            const getY = y+ dy[i];
            if((0 <= getX && getX<= 6) && (0 <= getY && getY<= 6) && board[getY][getX] === 1){
                dfs(getY,getX);
            }
        }
    }
    const bfs = (y,x) => {
        board2[y][x] = 0;
        const queue = [[y,x]];

        while(queue.length !== 0){
            let temp = queue.shift();
            for(let i = 0; i < 4; i++){
                const getX = temp[1] + dx[i];
                const getY = temp[0] + dy[i];
                if((0 <= getX && getX<= 6) && (0 <= getY && getY<= 6) && board2[getY][getX] === 1){
                    board2[getY][getX] = 0;
                    checkBoard2[getY][getX] = pushNumber2;
                    cnt++;
                    queue.push([getY,getX]);
                }
            }

        }


    }
    for(let y =0; y < length; y++){
        for(let x = 0; x < length; x++){
            if(board[y][x] === 1){
                dfs(y,x);
                dfsresult.push(cnt);
                cnt = 0;
                pushNumber++;
            }
        }
    }

    for(let y =0; y < length; y++){
        for(let x = 0; x < length; x++){
            if(board2[y][x] === 1){
                cnt = 1;
                bfs(y,x);
                bfsResult.push(cnt);
                pushNumber2++;
            }
        }
    }
    console.log(checkBoard);

    console.log(`dfs\n총 단지의 개수:${dfsresult.length}\n단지 수 오름차순 정렬:${dfsresult.sort((a,b) => a-b)}, 단지 뷰\n`,checkBoard.map(v=>v.join("")));
    console.log(`bfs\n총 단지의 개수:${bfsResult.length}\n단지 수 오름차순 정렬:${bfsResult.sort((a,b) => a-b)},단지 뷰\n`,checkBoard2.map(v=>v.join("")));
}

attachNumber("7\n0110100\n0110101\n1110101\n0000111\n0100000\n0111110\n0111000");