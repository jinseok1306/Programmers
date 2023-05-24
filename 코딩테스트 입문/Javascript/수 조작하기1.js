function solution(n, control) {
    control.split("").forEach((v)=>{
        if(v==="w"){
            n += 1;
        }
        else if(v==="s"){
            n += -1;
        }
        else if(v==="d"){
            n += 10;
        }
        else if(v==="a"){
            n += -10;
        }
    })
    
    return n;
}