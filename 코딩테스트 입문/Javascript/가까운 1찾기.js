function solution(arr, idx) {
    let answer = -1;
    
    arr.slice(idx).some((v,i)=>{
        if(v===1){
            answer = i+idx;     
            return true;
        }
    })
    
    return answer;
}