function solution(k, m, score) {
    let answer = 0;
    let length = Math.floor(score.length/m)
    score.sort((a,b)=>a-b);
    
    for(let i=1; i<=length; i++){            
        answer += score[score.length-i*m]*m; 
    }    
    return answer;
}