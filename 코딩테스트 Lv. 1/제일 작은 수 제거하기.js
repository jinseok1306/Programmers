function solution(arr) {
    let answer = [];
    
    let min = Math.min(...arr);
    
    (arr.length===1)?answer.push(-1):answer.push(...arr.filter((v)=>v!==min));
    
    return answer;
}