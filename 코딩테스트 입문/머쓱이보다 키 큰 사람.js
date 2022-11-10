function solution(array, height) {
    let answer = 0;
    
    array.forEach((e)=>{
        answer += e>height ? 1 : 0; 
    });
    
    return answer;
}