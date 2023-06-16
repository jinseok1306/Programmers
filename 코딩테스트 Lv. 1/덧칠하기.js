function solution(n, m, section) {
    let answer = 0;
    
    let part = 0;
    
    section.forEach((v)=>{
        if(v>part){
            part = v + m -1;            
            answer++;
        }
    })
    
    return answer;
}
