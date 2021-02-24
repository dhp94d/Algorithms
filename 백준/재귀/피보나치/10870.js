//https://www.acmicpc.net/problem/10872

var fs = require('fs');
var input = fs.readFileSync('./1.txt').toString().trim().split(' ');
let before = 0;
let next = 1;
const fibonacci = (number) => {
    if(number >= Number(input)){
    }else{   
        let temp = next;
        next = before + next;
        before = temp;
        fibonacci(number+1);
    }
}
fibonacci(0);
console.log(before);

//'/dev/stdin'