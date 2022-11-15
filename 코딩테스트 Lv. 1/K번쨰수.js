function solution(array, commands) {
    let answer = [];
    
    commands.forEach((v)=>{
       let [i,j,k] = v;
        
       answer.push(array.slice(i-1,j).sort((a,b)=>a-b)[k-1]);
    });
    
    return answer;
}