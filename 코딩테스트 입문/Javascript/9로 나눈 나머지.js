function solution(number) {
    let answer = number.split("").reduce((a,c)=>a+Number(c),0)%9;
    return answer;
}