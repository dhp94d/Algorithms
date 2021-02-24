function solution(s) {
    if(s.length === 4 || s.lnegth === 6){
        return s.split("").every((c)=>!isNaN(c))
    }
    return false
}