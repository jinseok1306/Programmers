function solution(my_string, is_prefix) {
    let answer = 0;    
    let text = my_string.replace(is_prefix,"*");
    
    answer = text.indexOf("*") === 0 ? 1 : 0;
    
    return answer;
}