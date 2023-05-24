function solution(arr, queries) {
    queries.forEach((v)=>{
        for(let i=v[0]; i<=v[1]; i++){
            if(i%v[2]===0){
                arr[i]++;
            }
        }
    })
    
    return arr;
}