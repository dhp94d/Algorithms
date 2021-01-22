const maze = (input) => {
    const board = input.split('\n').map(v => v.split(' ').map(Number));
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0 ,-1];
    const dis = Array.from(Array(board.length), () => Array(board.length).fill(0));
    
    const queue = [];
    queue.push([0,0]);
    board[0][0] = 1;
    while(queue.length !== 0){
        let temp = queue.shift();
        dx.map((v,i) => {
            let x = temp[0]+dx[i];
            let y = temp[1]+dy[i];
            if((0 <= x && x<= 6) && (0 <= y && y<= 6) && board[x][y] === 0){
                board[x][y] = 1;
                dis[x][y] = dis[temp[0]][temp[1]] + 1;
                queue.push([x,y]);
            }
        })
    }
    if(dis[6][6] === 0){
        console.log('-1');
    }else{
        console.log(dis[6][6]);
    }
}

maze('0 0 0 0 0 0 0\n0 1 1 1 1 1 0\n0 0 0 1 0 0 0\n1 1 0 1 0 1 1\n1 1 0 1 0 0 0\n1 0 0 0 1 0 0\n1 0 1 0 0 0 0');