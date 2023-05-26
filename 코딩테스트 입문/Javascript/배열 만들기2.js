function solution(l, r) {
    let answer = [];
    let arr = range(l,r);    
    
    arr.forEach((v)=>{
        if(v.toString().replace(/[0|5]/g,"") === ""){
            answer.push(v);
        }
    })
    
    if(answer.length === 0){
        answer.push(-1);
    }
    
    return answer;
}

function range(start, end) {
  let array = [];
  for (let i = start; i <= end; ++i) {
    array.push(i);
  }
  return array;
}