const maxRiding = (input) => {
    input = input.split("\n");
    const [maxWeight, length] = input[0].split(" ").map(Number);
    const dogs = input[1].split(" ").map(Number);
    const checkList = Array(length).fill(0);
    let max = 0;

    const dfs = (num,sum) => {
        if(num >= length){
            if(sum > max && maxWeight >= sum) max = sum;
            return;
        }else{
            checkList[num] = 1;
            dfs(num+1, sum + dogs[num]);
            checkList[num] = 0;
            dfs(num+1, sum);
        }
    }
    dfs(0,0);
    console.log(max);
}

maxRiding("259 5\n81 58 42 33 61");