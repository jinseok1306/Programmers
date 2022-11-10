function solution(my_string) {
    let answer = [];
    
    answer = my_string.replace(/[^0-9]/g,'').split('').map(Number).sort((acc,cur)=>acc-cur);
    
    return answer;
}