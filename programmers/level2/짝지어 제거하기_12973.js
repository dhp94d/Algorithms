function solution(s)
{
    let temp = [];
    for(let i of s){
        if(temp[temp.length-1] === i){
            temp.pop();
        }else{
            temp.push(i);
        }
    }
    return temp.length === 0 ? 1 : 0;
}