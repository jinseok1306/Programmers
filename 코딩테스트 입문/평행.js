function solution(dots) {
    let answer = 0;
    
    let check1 =  (dots[1][1]-dots[0][1])/(dots[1][0]-dots[0][0]);
    let check2 =  (dots[3][1]-dots[2][1])/(dots[3][0]-dots[2][0]);
    let check3 =  (dots[2][1]-dots[0][1])/(dots[2][0]-dots[0][0]);
    let check4 =  (dots[3][1]-dots[1][1])/(dots[3][0]-dots[1][0]);
    
    if(check1===check2 || check3===check4){
        answer = 1;
    }    
    
    return answer;
}