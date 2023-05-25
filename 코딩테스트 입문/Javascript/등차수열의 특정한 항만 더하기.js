function solution(a, d, included) {
    let answer = included.reduce((acc,cur,index)=>{
       return acc + (cur ? (a + d*(index)) : 0) 
    },0);

    return answer;
}