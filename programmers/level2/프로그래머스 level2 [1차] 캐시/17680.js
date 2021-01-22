function solution(cacheSize, cities) {
    let lru = []
    let cnt = 0;
    if(cacheSize === 0 ) return cities.length * 5;
    for(let city of cities){
        let targetIndex = lru.indexOf(city.toUpperCase());
        
        if(targetIndex === -1){
            cnt += 5;
        }
        else{
            cnt += 1;
            lru.splice(targetIndex,1);
        }
        if(lru.length >= cacheSize) lru.shift();
        lru.push(city.toUpperCase());
    }
    
    return cnt;
}