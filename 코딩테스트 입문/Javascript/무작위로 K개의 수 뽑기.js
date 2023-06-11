function solution(arr, k) {
    let answer = [];
    
    arr.some((v)=>{
        if(!!!answer.includes(v)){
            answer.push(v);
        }
        
        if(answer.length === k){
            return true;
        }
    })
    
    if(answer.length < k){
        let diff = k-answer.length;
        
        for(let i=0; i<diff; i++){
            answer.push(-1);
        }
    }
    
    return answer;
}