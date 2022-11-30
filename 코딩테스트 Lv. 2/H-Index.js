function solution(citations) {    
    let answer = 0;    
    let max = Math.max(...citations);    
    
    for(let i=max; i>=0; i--){
        let h_over = citations.filter((v)=>v>=i).length;        

        if(h_over >=i){
            answer = i;
            break;
        }
    }
            
    return answer;
}