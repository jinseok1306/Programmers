function solution(n) {
    var answer = 0;
    
    let arr = Array(n*6+1).fill(0);
    
    arr = arr.map((v,i)=>(i%6===0)?i:0).filter(v=>v!==0);            

    arr.some((e)=>{            
        if(e%n==0){            
            answer = e/6;    
            return e%n==0;
        }
    });
        
    return answer;
}