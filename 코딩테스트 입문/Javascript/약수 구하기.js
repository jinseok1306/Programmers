function solution(n) {
    let answer = Array(n).fill(0).map((v, index) => index+1).filter((v) => n%v===0);
    
    return answer;
}