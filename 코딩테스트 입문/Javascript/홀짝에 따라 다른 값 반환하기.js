function solution(n) {
    let answer = 0;
    
    let setNum = (n%2==0) ? 2 : 1;
    
    for(let i=setNum; i<=n; i+=2){
        answer += Math.pow(i,setNum);
    }
    
    return answer;
}