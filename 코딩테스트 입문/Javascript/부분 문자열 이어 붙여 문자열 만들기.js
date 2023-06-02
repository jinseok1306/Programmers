function solution(my_strings, parts) {
    let answer = "";
    
    parts.forEach((v,i)=>{        
        answer += my_strings[i].substring(v[0],v[1]+1);
    })
    
    return answer;
}