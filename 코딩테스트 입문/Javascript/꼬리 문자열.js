function solution(str_list, ex) {
    let answer = "";
    
    str_list.forEach((v)=>{        
        answer += v.includes(ex) ? "" : v;
    })
    
    return answer;
}