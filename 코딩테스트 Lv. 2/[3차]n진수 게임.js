function solution(n, t, m, p) {
    let answer = "";
    let result = "";
    let count = 0;
    
    for(let i=0; i<=t*m; i++){
        result += i.toString(n).toUpperCase();
    }
    
    let arr = result.split('');
    
    for(let i=0; i<arr.length; i++){
        if(Number.isInteger((i+1-p)/m) && count<t){
            answer += arr[i];
            count++;
        }
        else if(count>=t){
            break;
        }
    }
    
    return answer;
}