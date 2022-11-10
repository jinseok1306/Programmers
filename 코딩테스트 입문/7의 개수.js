function solution(array) {
    let answer = array.join('').replace(/[^7]/g,'').length;
    return answer;
}