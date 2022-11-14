function solution(numbers) {    
    let arr = [0,1,2,3,4,5,6,7,8,9];    
    let answer = arr.map((v)=>numbers.includes(v)?0:v).reduce((p,c)=>p+c,0);
    
    return answer;
}