const overlapPermutation = (input) => {
    const [num, length] = input.split(" ").map(Number);
    const check = Array(length).fill(0);
    let cnt = 0;
    const dfs = (number) => {
        if(number >= length){
            console.log(check);
            cnt++;
            return;
        }
        else{
            Array.from({length : num }, (v,i) => {
                check[number] = i+1;
                dfs(number + 1);
            });
        }

    }
    dfs(0);
    console.log(cnt);
}

overlapPermutation('3 2');