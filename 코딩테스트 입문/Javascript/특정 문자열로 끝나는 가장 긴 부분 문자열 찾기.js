function solution(myString, pat) {
    let answer = myString.match(new RegExp('.*' + pat,'g'));
    
    return answer.pop();
}