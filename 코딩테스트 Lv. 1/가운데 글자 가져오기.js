function solution(s) {
    let answer = s.substr(Math.ceil(s.length/2)-1,2-s.length%2);
    
    return answer;
}