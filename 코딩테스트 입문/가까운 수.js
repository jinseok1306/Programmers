function solution(array, n) {
    var answer = 0;
    let index = 0;
    let min = 100;
    
    array.sort((a,b)=>b-a).forEach((e,i)=>{
        if(Math.abs(e-n)<=min){
            min = Math.abs(e-n);    
            index = i;
        }        
    });
    
    answer = array[index];
    
    return answer;
}