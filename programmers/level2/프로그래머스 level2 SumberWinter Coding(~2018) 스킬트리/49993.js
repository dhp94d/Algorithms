function solution(skill, skill_trees) { 
    return skill_trees.filter(tree => skill.indexOf(tree.split('').filter(s => skill.split('').includes(s)).join('')) === 0).length;
}
module.exports = solution;