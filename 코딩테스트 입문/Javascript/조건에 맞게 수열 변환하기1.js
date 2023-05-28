function solution(arr) {
    let answer = [];
    
    arr.forEach((v)=>{
        if(v>=50 && v%2===0){
            answer.push(v/2);
        }
        else if(v<50 && v%2!==0){
            answer.push(v*2);
        }
        else{
            answer.push(v);
        }
    })
    
    return answer;
}