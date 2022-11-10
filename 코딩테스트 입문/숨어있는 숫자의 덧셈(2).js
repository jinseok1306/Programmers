function solution(my_string) {
    let answer = my_string.replace(/[a-zA-Z]/g,',').split(',').map(Number).reduce((arr,cur)=>arr+cur,0);
        
    return answer;
}