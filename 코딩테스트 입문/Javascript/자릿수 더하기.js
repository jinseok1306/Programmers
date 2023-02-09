function solution(n) {
    let answer = n.toString().split("").map(Number).reduce((a,b)=>a+b);
            
    return answer;
}