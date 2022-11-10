function solution(spell, dic) {         
    let voca = spell.sort().join('');
    let answer = dic.map(a => a.split("").sort().join("")).find(a => a===voca) !== undefined ? 1 : 2;
                
    return answer;
}