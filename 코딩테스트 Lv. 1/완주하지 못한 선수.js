function solution(participant, completion) {
    let answer = "";    
    completion.sort();
    
    participant.sort().some((e,i)=>{
        if(e!==completion[i]){
            answer = e;
            return true;
        }
    })
    
    return answer;
}