function solution(X, Y) {
    let answer = "";
    
    X = X.split("");
    Y = Y.split("");
    
    //공통정수는 0~9이기에 0~9까지 반복 진행
    for(let i=0; i<10; i++){        
        const crossX = X.filter((v)=>Number(v)===i).length;
        const crossY = Y.filter((v)=>Number(v)===i).length;
        
        //더 길이가 짧은 값이 교집합
        answer += String(i).repeat(Math.min(crossX,crossY));
    }
    
    if(answer === ''){
        return "-1";
    }
    else if(Number(answer)===0){
        return "0";
    }
    
    return answer.split("").sort((a,b)=>Number(b)-Number(a)).join("");
}