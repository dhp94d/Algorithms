function solution(dartResult) {
    let result =[];
    let temp = "";
    const multipleSet = "SDT"
    const multipleData = {
        "S" : 1,
        "D" : 2,
        "T" : 3
    }
    for(let i =0; i < dartResult.length; i++){
        if(!isNaN(dartResult[i])){
            temp += dartResult[i];
        }else{
            if(multipleSet.includes(dartResult[i])){
                result.push(Math.pow(Number(temp),multipleData[dartResult[i]]));
                temp = "";
            }else{
                if(dartResult[i] === "*"){
                    result[result.length -1] = result[result.length -1] * 2;
                    if(result.length !== 1){
                        result[result.length -2] = result[result.length -2] * 2;
                    }
                }else{
                    result[result.length -1] = result[result.length -1] * -1;
                }
            }
        }
    }
    return result.reduce((acc,cur) => acc + cur);
}