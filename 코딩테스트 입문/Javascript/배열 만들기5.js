function solution(intStrs, k, s, l) {
    let answer = [];
    
    intStrs.forEach((v)=>{        
       if(Number(v.substr(s,l))>k){
           answer.push(Number(v.substr(s,l)));
       }
    })
    
    return answer;
}