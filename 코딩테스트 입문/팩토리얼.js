function solution(n) {
    let answer = 0;
    
    let arr = [1,2,6,24,120,720,5040,40320,362880,3628800];
    
    for(let i=0; i<10; i++){
        if(n>=arr[i] && n<arr[i+1]){
            answer = i+1;
        }
        else if(n==arr[i+1]){
            answer = i+2;
        }
    }
    
    return answer;
}
