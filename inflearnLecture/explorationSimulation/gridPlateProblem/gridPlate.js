const gridPlate = (input) => {
    const gridPlate = input.split("\n").map((v) => v.split(" ").map(Number));
    
    const result = gridPlate.reduce((acc,curr,i) => {
        Array.from({length:3},(v,j) =>{
        if(curr[j]=== curr[4+j] && curr[j+1]===curr[4+j-1]) acc += 1;
        if(gridPlate[j][i]=== gridPlate[4+j][i] && gridPlate[j+1][i]===gridPlate[4+j-1][i]) acc += 1;
        });
        return acc;
    },0);
    
    return result;
}

module.exports = gridPlate;