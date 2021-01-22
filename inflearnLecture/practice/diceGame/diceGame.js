const getDiceData = (input) =>{
    let dataArr = input.split("\n")
    const length = dataArr.shift();
    const diceList = dataArr;
    let max = 0;

    Array.from({length:length},(v,i) => {
        diceList[i] = diceList[i].split(" ").sort().map(Number);
        let temp = 0;
        if(diceList[i][0] === diceList[i][1] && diceList[i][0] === diceList[i][2]){
            temp = 10000 + diceList[i][0] * 1000;
        }else if(diceList[i][0] === diceList[i][1] || diceList[i][0] === diceList[i][2]){
            temp = 1000 + diceList[i][0] * 100;
        }else if(diceList[i][1] == diceList[i][2]){
            temp = 1000 + diceList[i][0] * 100;
        }else temp = diceList[i][0] * 100;
        max = max >temp ? max : temp;
    })
    return max;
}
module.exports = getDiceData;