function solution(numbers) {
    let answer = 0;
    
    const average = arr => arr.reduce((p,c)=>p+c,0) / arr.length;
    
    answer = average(numbers);
    
    return answer;
}