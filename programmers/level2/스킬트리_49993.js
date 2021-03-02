function solution(skill, skill_trees) {
    const answer = skill_trees.filter((v) =>{
        let isOk = true;
        let temp = skill.split("");
        for(let i of v){
            if(skill.includes(i)){
                if(temp.shift() === i) continue;
                else{
                    isOk = false;
                    break;
                }
            }
        }
        return isOk;
    });;
    return answer.length;
}