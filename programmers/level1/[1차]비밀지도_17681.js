function solution(n, arr1, arr2) {
    let makeBinary = (arr) => {
        return arr.map((v) => v.toString(2).padStart(n,'0').split(""));    
    } 
    arr1 = makeBinary(arr1);
    arr2 = makeBinary(arr2);
    
    let answer = arr1.map((v1,i1) => v1.map((v2,i2) => {
        if(v2 === '1' || arr2[i1][i2] === '1') return "#";
        else return " ";
    }))
    return answer.map((v) => v.join(""));
}