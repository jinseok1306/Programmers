function solution(my_string, queries) {
    let answer = my_string;
    
    queries.forEach((v)=>{
        let first = answer.slice(0,v[0]);
        let middle = answer.slice(v[0],v[1]+1);
        let last = answer.slice(v[1]+1);
                        
        answer = first + middle.split("").reverse().join("") + last;
    })
    
    return answer;
}