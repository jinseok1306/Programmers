function solution(s1, s2) {
    let answer = 0;
    
    s1.forEach((e)=>{
        answer += s2.includes(e) ? 1 : 0;
    })
    
    return answer;
}