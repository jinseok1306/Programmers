function solution(arr, n) {
    let answer = [];
    let arr_flag = arr.length%2===0 ? true : false;
    
    arr.forEach((v,i)=>{
        if(arr_flag){
            if(i%2!==0){
                answer.push(v+n);
            }
            else{
                answer.push(v);
            }
        }
        else{
            if(i%2===0){
                answer.push(v+n);
            }
            else{
                answer.push(v);
            }
        }
    })
    
    return answer;
}