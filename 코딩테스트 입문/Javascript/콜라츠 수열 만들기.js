function solution(n) {
    let answer = [];
    
    const CreateCollatz = (num) =>{
        if(num===1){
            answer.push(num);            
        }
        else{
            answer.push(num);
            //짝수인 경우
            if(num%2===0){                
                return CreateCollatz(num/2);
            }
            //홀수인 경우
            else{
                return CreateCollatz(num*3+1);
            }
        }
    }
    
    CreateCollatz(n);
    
    return answer;
}
