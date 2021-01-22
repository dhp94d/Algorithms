function solution(record) {
    let answer = [];
    let actions = [];
    let user = {};
    
    for(const userInfo of record){
        let temp = userInfo.split(" ");
        switch(temp[0]){
            case 'Enter':
                actions.push({Action:temp[0],Id: temp[1]});
                user[temp[1]] = temp[2];
                break;
            case 'Leave':
                actions.push({Action:temp[0],Id: temp[1]});
                break;
            case 'Change':
                user[temp[1]] = temp[2];
                break;
        }
    }
    actions.map((v) => {
        if(v['Action'] === 'Enter'){
            answer.push(`${user[v['Id']]}님이 들어왔습니다.`);
        }else{
            answer.push(`${user[v['Id']]}님이 나갔습니다.`)
        }
    });
    return answer;
}