function solution(i, j, k) {
    var answer = 0;
    
    for(let index = i; index<=j; index++){
        answer += index.toString().split(k).length-1;
    }
    
    return answer;
}