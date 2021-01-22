const isAnagram = (input) => {
    const data = input.split("\n").map(v=> v.split(""));
    const anagramHash = {};
    if(data[0].lenght !== data[1].lenght) return "NO";
    data[0].map((v,i) => {
        if(!anagramHash[v]){
            anagramHash[v] = 1;
        }else anagramHash[v] +=1;
        if(!anagramHash[data[1][i]]){
            anagramHash[data[1][i]] = 1;
        }else anagramHash[data[1][i]] +=1;
    })
    for(i in anagramHash){
        if(anagramHash[i] % 2 !== 0) return "NO";
    }
    return "YES"
}

module.exports = isAnagram;