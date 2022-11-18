function solution(brown, yellow) {
    var answer = [];
        
    const arr = [];
    
    for(let i=1; i<=Math.sqrt(yellow); i++){
        if(yellow%i===0){
            arr.push(i);
        }
    }    
    
    arr.forEach((item)=>{
        if(((item+yellow/item)*2+4)===brown){
            answer.push(item+2);
            answer.push(yellow/item+2);
        }
    });
    
    return answer.sort((a,b)=>b-a);
}