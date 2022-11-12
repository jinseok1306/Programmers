function solution(a, b) {
    let answer = 0;
    
    [a,b] = [Math.min(a,b),Math.max(a,b)]
    
    for(let i=a; i<=b; i++){
        answer += i;
    }
    
    return answer;
}