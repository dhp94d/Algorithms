const overlapPermutation = (input) => {
    const [num, length] = input.split(" ").map(Number);
    const res = Array(length).fill(0);
    const check = Array(num).fill(0);
    let cnt = 0;
    const dfs = (number) => {
        if(number >= length){
            console.log(res);
            cnt++;
            return;
        }
        else{
            Array.from({length : num }, (v,i) => {
                if(check[i] === 0){
                    res[number] = i+1;
                    check[i] = 1;
                    dfs(number + 1);
                    check[i] = 0;
                }
            });
        }

    }
    dfs(0);
    console.log(cnt);
}

overlapPermutation('3 2');