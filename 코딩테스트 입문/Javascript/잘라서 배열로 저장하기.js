function solution(my_str, n) {
    // 정규식 
    // . -> 임의의 문자 선언
    // {1,2} -> 왼쪽기준 1~2개 문자
    let answer = my_str.match(new RegExp(`.{1,${n}}`, "g"));
    
    return answer;
}