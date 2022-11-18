function solution(n) {
    let answer = 0; 
    let num=1
    
    while(n>0){
        if (n%num===0){
            answer++;
        }
        n-=num;
        num++;
    }
    
    return answer;
}