function solution(s) {
    let answer = s.split("").sort((a,b)=>a == b ? 0 : a > b ? -1 : 1).join("");
            
    return answer;
}