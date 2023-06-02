function solution(names) {
    let answer = names.filter((v,i)=>i%5===0);
    return answer;
}