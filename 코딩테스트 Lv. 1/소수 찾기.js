function solution(n) {
    let answer = 0;
    
    const primeNumber = Array(n+1).fill(true);
        
    for(let i=2;i<=Math.ceil(Math.sqrt(n)); i++){
        if(primeNumber[i]){
            let m = 2;
            while(i*m<=n){
                primeNumber[i*m] = false;
                m++;
            }
        }
    }

    for(let i=2; i<=n; i++){
        if(primeNumber[i]){
            answer++;
        }
    }
    
    return answer;
}