function solution(n, k) {
    let answer = range(1,n/k).map(v=>v*k);
            
    return answer;
}

function range(a,b) {
    let arr = [];
    for(let i=a; i<=b; i++){
        arr.push(i);    
    }    
    return arr;
}