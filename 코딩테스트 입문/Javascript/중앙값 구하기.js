function solution(array) {
    let answer = array.sort((arr,cur)=>arr-cur)[parseInt(array.length/2)];
    
    return answer;
}