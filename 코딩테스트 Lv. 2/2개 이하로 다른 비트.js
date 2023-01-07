function solution(numbers) {
    let answer = [];
    
    numbers.forEach((v)=>{     
       answer.push(f(v)); 
    });
    
    return answer;
}

function f(n){
    //n이 짝수인 경우 마지막 비트가 0이기에 +1
    if(n%2===0){        
        return n+1;
    }
    //n이 홀수인 경우 뒤에서부터 체크했을 때 0이 나오는 지점과 이전 지점을 Reverse
    else{
        //앞에가 1로 시작하는 경우 0을 찾을 수 없기에 0을 추가
        let bit = "0" + n.toString(2);    
        let index = bit.lastIndexOf("0");
        
        return parseInt(`${bit.slice(0, index)}10${bit.slice(index + 2)}`, 2);
    }
}