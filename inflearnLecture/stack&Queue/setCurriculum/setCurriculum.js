const setCurriculum = (input) => {
    const data = input.split("\n");
    const curriculumOrder = data.shift().split("");
    const curriculumLength = data.shift();
    const result = data.map((list) => {
        let compareData = curriculumOrder.slice(0,curriculumOrder.length);
        list.split("").map(v => {
            if(v === compareData[0]){
                compareData.shift();
            }
        })
        if(compareData.length !== 0) return 'NO';
        return 'YES';
    });
    return [...result];
}

module.exports = setCurriculum;