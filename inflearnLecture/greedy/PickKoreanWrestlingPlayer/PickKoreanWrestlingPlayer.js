const criterionCheck = (input) => {
    const inputData = input.split("\n");
    const volunteerLen = Number(inputData.shift());
    const volunteerList = inputData.map((v) => v.split(" ")).sort().reverse();
    let maxWeight = 0;
    const maxHeight = volunteerList[0][0];
    return volunteerList.filter((v,i) => {
        if(v[1] > maxWeight){
            maxWeight = v[1];
            return 1;
        }else if(maxHeight === v[0] && maxWeight === v[1]){
            return 1;
        }else return 0;
    }).length;
}
module.exports = criterionCheck