const transBinary = (number) => {
    if(number < 1) return'';
    return transBinary(Math.floor(number / 2)) + String(number % 2);
}

module.exports = transBinary;