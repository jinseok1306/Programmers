function solution(arr, divisor) {
    let answer = arr.sort((a,b)=>a-b)
                    .map((v)=>v%divisor===0?v:0)
                    .filter((v)=>v!==0);
    
    answer = answer.length === 0 ? [-1] : answer;
    
    return answer;
}