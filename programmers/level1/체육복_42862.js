function solution(n, lost, reserve) {
    let student = Array(n).fill(1);
    for(let i of reserve){
        student[i-1] = 2;
    }
    for(let i of lost){
        student[i-1] -= 1;
    }
    student.map((v,i) => {
        if(v === 0){
            if(student[i-1] && student[i-1] === 2){
                student[i-1] = 1;
                student[i] = 1;
            }else if(student[i+1] && student[i+1] === 2){
                student[i+1] = 1;
                student[i] = 1;
            }
        }
    })
    return student.filter(v => v !==0).length;
}