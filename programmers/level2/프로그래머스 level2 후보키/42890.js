function solution(relation) {
    const cols = relation[0].length;

    const check = 1 << cols;
    const answer = new Set();

    for(let i = 1; i < check; i++){
        let temp = relation.map(x=>x.filter((col,index)=>i & (1<<index)).join(""));
        const set  = new Set(temp);
        console.log(temp);
        if(temp.length === set.size) answer.add(i);
    }
    console.log(answer);
    for( let x of answer){
        for ( let y of answer){
            if(x >= y) continue;
            if((x & y) === x) answer.delete(y);
        }
    }


    return answer.size;
}

solution(
    [["a", "1", "4"], ["2", "1", "5"], ["a", "2", "4"]]);