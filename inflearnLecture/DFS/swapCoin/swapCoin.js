const swapCoin = (input) => {
    input = input.split('\n');
    const length = Number(input[0]);
    const coinType = input[1].split(' ').map(Number).sort((a,b) => b-a);
    const returnPay = Number(input[2]);
    let min = Number.MAX_SAFE_INTEGER;
    const dfs = (sum, count) => {
        if(sum > returnPay) return
        else if(sum === returnPay){
            min = min > count ? count : min;
            return;
        }else{
            Array.from({length:length}, (v,i) => {
                dfs(sum+ coinType[i], count + 1);
            })
        }
    }
    dfs(0, 0);
    console.log(min);
}

swapCoin('3\n1 2 5\n15');