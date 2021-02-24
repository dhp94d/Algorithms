//https://www.acmicpc.net/problem/10872

var fs = require('fs');
var input = fs.readFileSync('./1.txt').toString().trim().split(' ');
let sum = 1;
const factorial = (number) => {
    if(number < 2){
    }else{   
        sum *= number;
        factorial(number -1);
    }
}
factorial(Number(input));
console.log(sum);

//'/dev/stdin'