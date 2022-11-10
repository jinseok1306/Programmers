function solution(my_string, n) {
    let answer = my_string.split('').reduce((a,b)=>a+b.repeat(n) ,'');    
    
    return answer;
}