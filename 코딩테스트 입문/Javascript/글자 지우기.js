function solution(my_string, indices) {
    let answer = my_string.split("");
    
    indices.forEach((v)=>{
        answer[v] = "&";
    })
    
    return answer.filter((v)=>v!=="&").join("");
}