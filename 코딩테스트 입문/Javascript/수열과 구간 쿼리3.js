function solution(arr, queries) {
    let temp = 0;
    queries.forEach((v)=>{
        temp = arr[v[0]];
        arr[v[0]] = arr[v[1]];
        arr[v[1]] = temp;
    })
    
    return arr;
}