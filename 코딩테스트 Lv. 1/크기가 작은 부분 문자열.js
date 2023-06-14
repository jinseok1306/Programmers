function solution(t, p) {        
    let arr = [];
    
    t.split("").some((v,i)=>{
        if(t.length-i >= p.length){
            if(Number(t.substring(i,p.length+i)) <= Number(p)){
                arr.push(Number(t.substring(i,p.length+i)));    
            }            
        }
        else{
            return true;
        }
    })
            
    return arr.length;
}