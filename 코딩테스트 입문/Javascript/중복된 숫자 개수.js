function solution(array, n) {
    let answer = 0;
    
    array.forEach((e)=>{
       answer += (e===n)?1:0; 
    });
    
    return answer;
}