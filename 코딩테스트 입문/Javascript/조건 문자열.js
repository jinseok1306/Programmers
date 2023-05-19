function solution(ineq, eq, n, m) {
    let answer = eval(`${n}${ineq}${eq==="!"?"":eq}${m}`) ? 1 : 0;
    return answer;
}