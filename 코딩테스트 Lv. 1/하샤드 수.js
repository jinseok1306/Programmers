function solution(x) {
    let answer = x % (x.toString().split('')
                    .map(Number)
                    .reduce((p,c)=>p+c,0)) === 0 ? true : false;
    
    return answer;
}