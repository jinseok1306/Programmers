function solution(n, k) {
    let answer = 0;
    let service = parseInt(n/10);
    
    answer = n*12000 + (k-service)*2000;
    
    return answer;
}