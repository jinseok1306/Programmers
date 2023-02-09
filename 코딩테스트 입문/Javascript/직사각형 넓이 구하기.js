function solution(dots) {
    let answer = 0;
        
    for(let i=1; i<=3; i++){
        if(dots[0][0] !== dots[i][0] && dots[0][1] !== dots[i][1]){
            answer = Math.abs(dots[0][0]-dots[i][0])*Math.abs(dots[0][1]-dots[i][1]);     
        }
    }
    
    return answer;
}