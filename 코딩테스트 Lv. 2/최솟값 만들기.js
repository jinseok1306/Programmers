function solution(A,B){
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    
    const answer = Array(A.length).fill(0).map((v,i)=>A[i]*B[i]);
                
    return answer.reduce((p,c)=>p+c,0);
}