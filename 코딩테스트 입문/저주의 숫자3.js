function solution(n) {    
    let arr = Array.from({length: 500}, (v, i) => i);     
    
    arr = arr.filter((v)=>v%3!==0 && !v.toString().includes(3));
        
    return arr[n-1];
}