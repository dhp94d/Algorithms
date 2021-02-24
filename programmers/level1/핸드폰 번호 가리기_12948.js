function solution(phone_number) {
    let last4Number = phone_number.slice(-4);
    return last4Number.padStart(phone_number.length,"*");
}