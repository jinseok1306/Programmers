function solution(a, b) {
    let answer = Math.max(Number(`${a}${b}`),Number(2*a*b));
    return answer;
}