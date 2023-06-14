function solution(k, score) {
    let answer = [];    
    let k_arr = [];
    
    score.forEach((v)=>{        
        if(k_arr.length<k){
            k_arr.push(v);                 
        }
        else if(k_arr[k-1]<v){                   
            k_arr.pop();
            k_arr.push(v);            
        }    
        
        k_arr.sort((a,b)=>b-a);
        answer.push(k_arr.at(-1));
    })
    
    return answer;
}