function solution(n) {
    let answer = Array(n).fill("").map((v,i)=>i%2===0?"수":"박").join("");

    return answer;
}