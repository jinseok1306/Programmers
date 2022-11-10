function solution(before, after) {
    let answer = 0;
    
    answer = before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
    
    return answer;
}