function solution(q, r, code) {
    let answer = code.split("").filter((v,i)=>i%q===r).join("");
    return answer;
}