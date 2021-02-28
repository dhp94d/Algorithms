function solution(priorities, location) {
    let arr = priorities.map((v,i) => ({p :v, i: i}));
    let result = [];
    while(arr.length !== 0){
        let temp = arr.shift();
        if(arr.some(v => v['p'] > temp['p'])){
            arr.push(temp);
        }else{
            result.push(temp);
        }
    }
    return result.findIndex(v => v["i"] === location) +1;
}