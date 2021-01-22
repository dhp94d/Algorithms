const makeFloorMid = (start, end) => Math.floor((start + end) /2);

const binarySearch = (input) => {
    const inputData = input.split("\n");
    const [length, findIndex] = inputData.shift().split(" ").map(Number);
    const ASCNumbersList = inputData[0].split(" ").sort();

    let leftIndex = 0;
    let rightIndex = length -1;
    let mid = makeFloorMid(0, length-1);
    while(leftIndex < rightIndex){
        if(ASCNumbersList[mid] < findIndex){
            leftIndex = mid + 1;
            mid = makeFloorMid(leftIndex, rightIndex);
        }else{
            rightIndex = mid - 1;
            mid = makeFloorMid(leftIndex, rightIndex);
        }
    }
    return mid + 1;
}

module.exports = binarySearch;