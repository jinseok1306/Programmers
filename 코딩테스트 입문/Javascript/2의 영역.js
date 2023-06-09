function solution(arr) {
    let answer = [];
    let first = arr.indexOf(2);
    let last = arr.lastIndexOf(2);        
    
    answer = first >=0 ? arr.slice(first,last+1) : [-1];
    
    return answer;
}