function solution(code) {
    let answer = "";
    let mode = 0;
    
    code.split("").forEach((v,i) =>{        
        if(v==="1" || v==="0"){
            mode = (Number(v) === 1) ? (mode === 0 ? 1 : 0) : mode;
        }
        else if(mode === 0){
            answer += i%2 ===0 ? v : ""; 
        } 
        else if(mode === 1){
            answer += i%2 !==0 ? v : "";
        }
    });
    
    return (answer === "") ? "EMPTY" : answer;
}