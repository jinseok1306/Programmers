function solution(arr) {
    let answer = arr.reduce((p,c)=>p+c,0)/arr.length;
    
    return answer;
}