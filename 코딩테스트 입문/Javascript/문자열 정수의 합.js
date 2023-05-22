function solution(num_str) {    
    let answer = num_str.split("").reduce((a,c)=>Number(a)+Number(c));
    return answer;
}