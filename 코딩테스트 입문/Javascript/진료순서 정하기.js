function solution(emergency) {
    var answer = [];
    
    let arr = [...emergency];        
    
    arr.sort((a,b)=>b-a);
        
    emergency.forEach((e)=>{                
        answer.push(arr.indexOf(e)+1);
    });
    
    return answer;
}