function solution(slice, n) {
    let answer = 0;
    
    answer = n%slice===0 ? n/slice : parseInt(n/slice)+1;
    
    return answer;
}