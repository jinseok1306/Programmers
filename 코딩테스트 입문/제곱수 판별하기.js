function solution(n) {
    let answer = 0;
    let sqrt = Math.sqrt(n);
    
    if(sqrt%1!==0){
        answer=2;
    }
    else{
        answer=1;
    }
    
    
    return answer;
}