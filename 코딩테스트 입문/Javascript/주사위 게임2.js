function solution(a, b, c) {
    let answer = 0;
    
    //모두 같을 경우
    if(a===b && b===c){
        answer = (a+b+c) * (Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))
                    *(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3));
    }
    //두개만 같은 경우
    else if(a===b || b===c || c===a){
        answer = (a+b+c) * (Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));
    }
    //모두 다른 경우
    else{
        answer = (a+b+c);
    }
    
    return answer;
}