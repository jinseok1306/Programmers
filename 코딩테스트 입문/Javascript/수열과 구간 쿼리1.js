function solution(arr, queries) { 
    queries.forEach((v)=>{
        for(let i=v[0]; i<=v[1]; i++){
            arr[i]++;
        }
    })
    
    return arr;
}