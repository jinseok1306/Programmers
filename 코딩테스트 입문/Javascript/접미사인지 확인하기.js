function solution(my_string, is_suffix) {
    let answer = 0;
    
    answer = (my_string.slice(is_suffix.length*-1)) === is_suffix ? 1 : 0;
        
    return answer;
}