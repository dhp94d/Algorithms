function solution(record) {
    const answer = [];
    const users = {};
    for(let command of record){
        command = command.split(" ");
        if(command[0] === 'Enter' || command[0] === "Change"){
            users[command[1]] = command[2];
        }
    }
    const commandType = (type, id, name) => {
        switch (type){
            case 'Enter':
                return `${users[id]}님이 들어왔습니다.`
                break;
            case 'Change':
                break;
            case 'Leave':
                return `${users[id]}님이 나갔습니다.`
                break;
            default:
                console.log("없는 명령 입니다.");
        }
    }
    for(let command of record){
        command = command.split(" ");
        commandType(...command) && answer.push(commandType(...command));
    }
    return answer;
}