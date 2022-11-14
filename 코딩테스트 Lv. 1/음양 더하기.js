function solution(absolutes, signs) {
    let answer = absolutes.map((v,i)=>signs[i]?v:v*-1).reduce((p,c)=>p+c,0);
    
    return answer;
}