function solution(d, budget) {
    d.sort((a,b)=>a-b);
    
    while(d.reduce((p,c)=>p+c,0)>budget){
        d.pop();
    }
    
    return d.length;
}