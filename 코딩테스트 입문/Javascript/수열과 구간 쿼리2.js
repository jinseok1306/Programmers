function solution(arr, queries) {
    let answer = [];
    
    queries.forEach((v)=>{
        let temp_arr = arr.slice(v[0],v[1]+1).sort((a,b)=>a-b);
        let result_val = -1;

        temp_arr.forEach((e)=>{
            if(e>v[2] && result_val<0){
                result_val = e;
            }
        })
        
        answer.push(result_val);
    })

    return answer;
}