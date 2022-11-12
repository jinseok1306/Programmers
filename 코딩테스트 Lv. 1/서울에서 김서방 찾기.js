function solution(seoul) {
    let answer = '';
    
    seoul.some((e,i)=>{
       if(e==="Kim"){
           answer = `김서방은 ${i}에 있다`;
           return true;
       } 
    });
    
    return answer;
}