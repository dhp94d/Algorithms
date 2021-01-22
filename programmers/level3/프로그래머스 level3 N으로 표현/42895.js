function solution(N, number) {
    const set = new Array(8).fill().map(() => new Set());
    // [set() for x in range(8)]
    for(let i=0; i<8; i++){
        set[i].add(Number(N.toString().repeat(i+1)));
        for (let j=0; j < i; j++) {
            for(const arg1 of set[j]){
                for(const arg2 of set[i-j-1]){
                    console.log(i,j,i-j-1, arg1,arg2)
                    set[i].add(arg1+arg2);
                    set[i].add(arg1-arg2);
                    set[i].add(arg1*arg2);
                    set[i].add(arg1/arg2);
                    if(set[i].has(number)) return i+1;
                }
            }
        }
    }
    return -1;
}
console.log(solution(5,12));