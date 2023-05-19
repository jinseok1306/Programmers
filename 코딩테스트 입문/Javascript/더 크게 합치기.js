function solution(a, b) {
    let answer = Math.max(Number(`${a}${b}`),Number(`${b}${a}`));
    return answer;
}