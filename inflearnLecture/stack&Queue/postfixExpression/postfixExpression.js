const get2NumsForCalculate = (num1, num2, calculateCase) => {
    switch (calculateCase){
        case "+" :
            return num1 + num2;
        case "-" :
            return num1 - num2;
        case "*" :
            return num1 * num2;
        case "/" :
            return num1 / num2;
        case "%" :
            return num1 % num2;
    }
}

const postfixExpression = (input) => {
    const data = input.split(" ");
    const calculateStack = [];
    
    data.map((value) => {
        if(isNaN(value)){
            let n1 = calculateStack.pop();
            let n2 = calculateStack.pop();
            calculateStack.push(get2NumsForCalculate(n2, n1, value));
        }else calculateStack.push(Number(value));
    })
    return calculateStack[0];
}

module.exports = postfixExpression;