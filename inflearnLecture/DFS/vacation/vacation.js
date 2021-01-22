const vacation =(input) => {
    input = input.split("\n");
    const length = Number(input.shift());
    const data = input.map(v => v.split(" ").map(Number));
    let max = Number.MIN_SAFE_INTEGER;

    const dfs = (v, sum) => {
        console.log(v, sum);
        if(v > length-1){
            max = sum > max ? sum : max;
        }
        else{
            if(v+data[v][0] <= length){
                dfs(v+data[v][0], sum+data[v][1]);
            }
            dfs(v+1, sum);
        }
    }
    dfs(0,0);
    console.log(max);
}
vacation('7\n4 20\n2 10\n3 15\n3 20\n2 30\n2 20\n1 10');