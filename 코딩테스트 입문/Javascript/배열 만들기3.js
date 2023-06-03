function solution(arr, intervals) {
    let answer = [];
    
    intervals.forEach((v)=>{        
        answer = answer.concat(arr.slice(v[0],v[1]+1));
    })
    
    return answer;
}