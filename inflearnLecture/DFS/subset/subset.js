const subsetDFS = (number,max,check) => {
    if(number > max) {
        const returnData = check.filter((v) => v !== 0);
       console.log(...returnData);
    }
    else{
        check[number] = number;
        subsetDFS(number + 1, max, check);
        check[number] = 0;
        subsetDFS(number + 1, max, check);
    }
}

const getSubest = (number) => {
    const check = Array(4).fill(0);
    subsetDFS(1,number,check);
}
getSubest(3);