const scoreCalculation = (input) => {
    const inputData = input.split("\n");
    const length = inputData.shift();
    const scoreList = inputData[0].split(" ").map(Number);
    let count = 0;

    const result = scoreList.reduce((acc, cur, i, v) => {
        if(cur === 1) {
            count += 1;
            return acc + count;
        }
        count = 0;
        return acc;

    },0);
    return result
}

module.exports = scoreCalculation;