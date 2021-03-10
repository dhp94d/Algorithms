var fs = require('fs');
var input = fs.readFileSync('./1.txt').toString();

input = input.split("\r\n").map(Number);

const len = input.shift();

const dp = [[1,0],[0,1]];

const dpFibonacci = (n) => {
    if(dp[n] !== undefined){
        return dp[n];
    }else{
        const [first, second] = [dpFibonacci(n - 2), dpFibonacci(n - 1)];
        return dp[n] = [first[0] + second[0] , first[1] + second[1]];
    }
}

for(let i = 0; i < len; i++){
    console.log(dpFibonacci(input[i]).join(" "));
}
