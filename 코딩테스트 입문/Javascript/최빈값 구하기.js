function solution(array) {
    let answer = 0;
    
    let arr = Array(1000).fill(0);
    
    array.forEach((e)=>{
       arr[e]++;         
    });
    
    let max = Math.max(...arr);
    let count = arr.filter((v)=>max===v).length;
    
    answer = (count>1) ? -1 : arr.indexOf(max);
    
    return answer;
}