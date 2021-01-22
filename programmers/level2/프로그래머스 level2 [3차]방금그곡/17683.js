function solution(m, musicinfos) {
    var answer = '';
    let cnt = 0;
    let max = 0;
    
    const changeAlpha = (list) => {
        list = list.split("#");
        for(let alpha in list){
            if(alpha !== String(list.length-1)){
                list[alpha] = `${list[alpha].slice(0,list[alpha].length-1)}${String.fromCharCode(list[alpha][list[alpha].length-1].charCodeAt()+8)}`;
            }
        }
        return list.join("");
    }
    m = changeAlpha(m);
    const getDiffTime = (time1,time2) => {
        time1 = time1.split(":");
        time2 = time2.split(":");
        
        time1 = Number(time1[0]) * 60 +Number(time1[1]);
        time2 = Number(time2[0]) * 60 +Number(time2[1]);
        
        return Math.abs(time1 - time2); 
    }
    musicinfos.map((v) =>{
        let [start,end,name,sheet] = v.split(",");
        sheet = changeAlpha(sheet);
        let tempSheet = ""
        let sheetLength = sheet.length;
        let length = getDiffTime(start,end);
        Array.from({length:length},(v,i) => {
            tempSheet += sheet[i%sheetLength];
        })
        let target = 0;
        let isM = -1;
        while(target < sheetLength-1){
            let tempIndex = tempSheet.indexOf(m, target);
            if(tempIndex !== -1){
                isM = tempIndex;
                break;
            }else{
                target += m.length;
            }
        }
        if(isM !== -1 && length > max){
            answer = name;
            max = length;
        }
    })
    return answer ? answer : "(None)";
}