function solution(my_string, overwrite_string, s) {
    let answer = '';
    let arr = overwrite_string.split('');
    
    answer = my_string.split('').map((v,i)=>{
        if(i>=s && arr[i-s]){
            return arr[i-s]
        }
        else{
            return v
        }
    }).join('');
    
    return answer;
}