function solution(n, left, right) {
    const arr = [];
    
    for(let i=left; i<=right; i++){
        arr.push(Math.max((Math.floor(i/n)+1),(i%n+1)));
    }

    return arr;
}