const sumOfNumbers =(num) =>{
    const inputData = num.split("\n");
    const [length,isOkNumber] = inputData.shift().split(' ').map(Number);
    const numList = inputData[0].split(' ').map(Number);
    
    let leftIndex = 0;
    let rightIndex = 1;
    let total = numList[0];
    let result =0;


    while(true){
        if(total < isOkNumber){
            if(rightIndex < length){
                total += numList[rightIndex]
                rightIndex += 1;
            }else{
                break;
            }
        }else if(total === isOkNumber){
            result += 1;
            total -= numList[leftIndex];
            leftIndex += 1;
        }else{
            total -= numList[leftIndex];
            leftIndex +=1;
        }
    }
    return result;
}

module.exports = sumOfNumbers