function solution(s) {
    let answer = 0;    
    
    for(let i=0; i<s.length; i++){                
        let stack = [];
        s.split("").forEach((v)=>{
            let last = stack.slice(-1)[0];
            
            if(v === "[" || v === "{" || v ==="("){
                stack.push(v);    
            }                 
            else if(v === "]" && last === "["){                
                stack.pop();                                
            }
            else if(v === "}" && last === "{"){
                stack.pop();    
            }
            else if(v === ")" && last === "("){
                stack.pop();    
            }
            else{
                stack.push(v);      
            }
        })
        
        if(stack.length===0){
            answer++;
        }
        
        s = s.substring(1) + s.substring(0,1);        
    }
    
    return answer;
}