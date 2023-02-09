function solution(array) {
    let answer = [];
    let max = Math.max(...array);
    
    answer.push(max)    
    answer.push(array.indexOf(max));
    
    return answer;
}