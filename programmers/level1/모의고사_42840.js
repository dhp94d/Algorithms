function solution(answers) {
    var answer = [0,0,0];
    let result = [];
    const student = {
        1 : [1,2,3,4,5],
        2 : [2,1,2,3,2,4,2,5],
        3 : [3,3,1,1,2,2,4,4,5,5]
    }
    let answersLen = answers.length;
    let [s1 ,s2, s3] = [student[1].length, student[2].length, student[3].length];
    for(let i in answers){
        let [l1, l2, l3] = [i % s1, i % s2, i % s3];
        console.log(answers[i], student[1][l1], student[2][l1], student[3][l1] )
        if(answers[i] === student[1][l1]) answer[0]++;
        if(answers[i] === student[2][l2]) answer[1]++;
        if(answers[i] === student[3][l3]) answer[2]++;
    }
    const max = Math.max(...answer)
    
    for(let i in answer){
        if(answer[i] === max){
            result.push(Number(i)+1);
        }
    }
    return result
}