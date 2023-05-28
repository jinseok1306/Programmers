function solution(my_string, index_list) {
    let answer = '';
    let arr = my_string.split("");
    
    index_list.forEach((v)=>{
        answer += arr[v];
    })
    
    return answer;
}