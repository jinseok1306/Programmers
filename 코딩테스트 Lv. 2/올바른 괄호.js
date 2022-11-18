function solution(s){    
    let stackCnt = 0;
    let answer = true;
            
    for(let i=0; i<s.length; i++){
        if(s[i]==='('){
            stackCnt++;
        }
        else{
            if(stackCnt>0){
                stackCnt--;
            }
            else{
                answer = false;
                break;
            }
        }
    }
    
    if(stackCnt>0){
        answer = false
    }
    
    return answer;
}