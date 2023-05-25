function solution(numLog) {
    let answer = "";
    
    numLog.forEach((v,i)=>{
        if(i>0){
            if(v-numLog[i-1] === 1){
                answer += "w";
            }
            else if(v-numLog[i-1] === -1){
                answer += "s";
            }
            else if(v-numLog[i-1] === 10){
                answer += "d";
            }
            else if(v-numLog[i-1] === -10){
                answer += "a";
            }
        }
    })
    
    return answer;
}