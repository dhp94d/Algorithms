function solution(board, moves) {
    let stack = [];
    for(let getItem of moves){
        for(let i =0; i < board.length; i++){
            if(board[i][getItem-1] !== 0){
                stack.push(board[i][getItem-1]);
                board[i][getItem-1] = 0;
                break;
            }
        }
    }
    let temp = [];
    for(let i = 0; i < stack.length; i++){
        if(temp[temp.length-1] !== stack[i]){
            temp.push(stack[i]);
        }else{
            temp.pop();
        }
    }
    return stack.length - temp.length;
}