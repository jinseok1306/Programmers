function solution(s) {
    let answer = [];    
    let myObj = {};
    
    s.split("").forEach((v,i)=>{        
        if(myObj[v]>=0){
            answer.push(i-myObj[v]);   
        }
        else{            
            answer.push(-1);
        }                
        myObj[v] = i;                
    })
    
    return answer;
}