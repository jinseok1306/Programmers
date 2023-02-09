function solution(my_string) {
    let answer = my_string.split('').map(v=>v.toLowerCase()).sort().join('');
    
    return answer;
}