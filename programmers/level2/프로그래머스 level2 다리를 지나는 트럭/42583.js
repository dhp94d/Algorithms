function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let curWeight = 0;
    const bridge = [];
    
    do {
        time++;
        if(time > bridge_length && bridge[0][1] === time){
            curWeight -= bridge.shift()[0];
        }
        if(curWeight + truck_weights[0] <= weight && bridge.length < bridge_length){
            let getTruck = truck_weights.shift();
            curWeight += getTruck;
            bridge.push([getTruck,time + bridge_length]);
        }else{
            if(bridge[0]) time = bridge[0][1] -1
        }
    } while(bridge.length !== 0);
    
    return time;
}

module.exports = solution;