function solution(myString, pat) {
    let answer = 0;
    
    for(let i=0; i<myString.length; i++){       
        if(myString.substr(i).indexOf(pat) === 0){
            answer++;
        }        
    }
    
    return answer;
}