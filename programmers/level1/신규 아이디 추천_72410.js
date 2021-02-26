function solution(new_id) {
    let isOk = ['-','_','.']
    let arr = new_id.toLowerCase().split("").filter((v,i) => {
        let ascii = v.charCodeAt();
        return isOk.includes(v) || (ascii >96 && ascii < 123) || (ascii > 47 && ascii < 58);
    });
    arr = arr.filter((v,i) => !(arr[i+1] && v === '.' && arr[i+1] === '.'));
    
    if(arr[0] === ".") arr.shift();
    if(arr[arr.length-1] === ".") arr.pop();
    if(arr.length === 0) arr = ["a"]
    if(arr.length > 15) arr = arr.slice(0,15);
    if(arr[arr.length-1] === ".") arr.pop();
    arr = arr.join("");
    if(arr.length < 3) arr = arr + arr[arr.length-1].repeat(3 - arr.length);
    return arr;
}