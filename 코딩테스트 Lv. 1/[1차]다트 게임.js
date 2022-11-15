function solution(dartResult) {
    let answer = "0";
    
    let arr = dartResult.match(/\d{1,2}\w|\*|\#/gi);
    
    arr.forEach((v,index)=>{
        let score_regex = /\d{1,2}\w/;        
        let option_regex = /[*#]/;        
        //점수일 경우
        if(score_regex.test(v)){
            let score = v.match(/\d{1,2}/);
            let bonus = v.match(/[SDT]/);      
            
            if(bonus == 'S'){
                answer += "+" + score.toString();
            }
            else if(bonus == 'D'){
                answer += "+" + Math.pow(score,2).toString();
            }
            else if(bonus == 'T'){
                answer += "+" + Math.pow(score,3).toString();
            }            
        }
                        
        //옵션일 경우
        if(v==="*"){            
            if(index===arr.length-1){
                answer = answer.split("+").map((v,i)=>i>=2?v+"*2":v).join("+");
            }
            else{
                answer = answer.split("+").map((v,i)=>v+"*2").join("+");    
            }            
        }
        else if(v==="#"){
            answer += "*(-1)"
        }        
    });    
    return eval(answer);
}