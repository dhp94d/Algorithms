function solution([...priorities], location) {
    let answer = 0;
    const queue = [];
    priorities = priorities.map((v,i) => v = [v,i]);
    
    while(priorities.length !== 0){
        let temp = priorities.shift();
        if(priorities.filter((v) => v[0] > temp[0]).length === 0){
            queue.push(temp)
        }else priorities.push(temp);
    }
    queue.map((v,i) =>{
        if(v[1] === location) answer = i;
    })
    return answer+1;
}