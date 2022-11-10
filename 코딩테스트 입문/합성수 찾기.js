function solution(n) {
    let answer = 0;
    
    for(let i=1;i<=n; i++){
        answer += checkNum(i)?1:0;
    }
    
    return answer;
}

function checkNum(n){
    let count=0;
    
    for(let i=1; i<=n; i++){
        if(n%i===0){
            count++;
        }
        if(count>=3){
            break;
        }
    }
    
    return count>=3 ? true : false;
}