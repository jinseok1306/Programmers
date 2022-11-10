function solution(n) {
    let answer = [];
    
    let my_set = new Set();
    
    while(n>=2){
        for(let i=2; i<=n; i++){
            if(n%i===0){
                n = n/i;
                my_set.add(i)    
                break;
            }            
        }
    }
    
    answer = [...my_set];
    
    return answer;
}