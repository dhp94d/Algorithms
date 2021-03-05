function solution(bridge_length, weight, truck_weights) {
    let trucks = truck_weights.map((v) => [v,bridge_length]);
    let temp = [trucks.shift()];
    let time = 1;
    
    while(temp.length !== 0){
        temp.map((v) => v[1] -= 1);
        if(temp[0][1] === 0){
            temp.shift();
        }
        let max = temp.length === 0 ? 0 : temp.reduce((acc,cur) =>acc + cur[0],0)
        if(trucks.length !== 0 && temp.length < bridge_length && max + trucks[0][0] <= weight){
            temp.push(trucks.shift());
        }else{
            if(temp.length > 0){
                let n = temp[0][1]
                time = time + n -1;
                temp.map((v) => v[1] = v[1] - n +1);
            }
            
        }
        time++;
    }
    return time;
}