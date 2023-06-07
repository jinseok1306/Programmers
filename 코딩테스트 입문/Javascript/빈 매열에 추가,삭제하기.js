function solution(arr, flag) {
    let answer = [];
    
    flag.forEach((v,i)=>{
        if(v){
            for(let j=0; j<arr[i]*2; j++){
                answer.push(arr[i]);            
            }            
        }
        else{
            for(let j=0; j<arr[i]; j++){
                answer.pop();
            }
        }
    })
    
    return answer;
}