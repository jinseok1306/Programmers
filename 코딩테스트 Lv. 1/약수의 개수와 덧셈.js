function solution(left, right) {
    const check = (n) => Array(n).fill(0).map((v, index) => index+1).filter((v) => n%v===0).length;
    let answer = 0;
        
    for(let i=left; i<=right; i++){
        answer += check(i)%2===0 ? i : -1 * i;
    }
    
    return answer;
}