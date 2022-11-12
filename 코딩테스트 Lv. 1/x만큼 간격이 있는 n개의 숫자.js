function solution(x, n) {
    let answer = Array(n).fill(0).map((v,i)=>(i+1)*x);
    
    return answer;
}