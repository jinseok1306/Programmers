function solution(rsp) {
    let arr = {
      2:0,
      0:5,
      5:2
    };   
    
    let answer = rsp.split('').map(v=>arr[v]).join('');
    
    return answer;
}