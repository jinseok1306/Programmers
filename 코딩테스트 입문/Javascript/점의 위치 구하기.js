function solution(dot) {
    let answer = 0;
    let [x,y] = dot;
    
    if(x>0 && y>0){
        answer=1;
    }
    else if(x<0 && y>0){
        answer=2;        
    }
    else if(x<0 && y<0){
        answer=3;
    }
    else if(x>0 && y<0){
        answer=4;
    }
    
    return answer;
}