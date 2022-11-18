function solution(number, limit, power) {
    let answer = [];        
    
    for(let i=1; i<=number; i++){
        let weapon = check(i)>limit?power:check(i);
        answer.push(weapon);
    }
        
    return answer.reduce((p,c)=>p+c,0);
}

function check(n){
    const arr = [];
    
    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i===0){
            arr.push(i);
            if(n/i!==i){
                arr.push(n/i);
            }
        }
    }
    
    return arr.length;
}