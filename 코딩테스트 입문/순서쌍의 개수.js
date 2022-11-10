function solution(n) {
    let answer = 0;
    
    for(let i=1; i<Math.sqrt(n); i++){
        answer += n%i===0 ? 2 : 0;
    }
    
    answer += Number.isInteger(Math.sqrt(n)) ? 1 : 0;
    
    return answer;
}