const dfs = (start, numberSet, length, check) => {
    if( start >= length) {
        let subset1 = 0;
        let subset2 = check.reduce((acc, cur, i) => {
            if(cur === 1){
                acc += numberSet[i];
            }else{
                subset1 += numberSet[i];
                acc = acc;
            }
            return acc;
        },0);
        if( subset1 === subset2){
            throw 'Yes';
        }
    }else{
        check[start] = 1;
        dfs(start +1, numberSet, length, check);
        check[start] = 0;
        dfs(start +1, numberSet, length, check);
    }
}

const sameSumSubset = (input) => {
    input = input.split('\n');
    const numberSet = input.pop().split(" ").map(Number).sort((a,b) => a-b);
    const length = Number(input);
    const check = Array(length).fill(0);
    try {
        dfs(0, numberSet, length, check);
    } catch (e) {
        return e;
    }
}