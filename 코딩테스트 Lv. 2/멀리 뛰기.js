function solution(n) {
    return fibonacci(n);
}

function fibonacci(n) {
    let fiboArr = new Array(n+1).fill(0)
    fiboArr[0] = 1;
    fiboArr[1] = 1;
    for(let i=2; i<=n; i++) {
        fiboArr[i] = (fiboArr[i-1] + fiboArr[i-2])%1234567; 
    }
    return fiboArr[n];
}