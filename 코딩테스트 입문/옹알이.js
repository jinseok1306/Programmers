function solution(babbling) {
    let answer = 0;
    
    let voca = ["aya", "ye", "woo", "ma" ];
    
    babbling.forEach((e)=>{
        let letter = e;        
        voca.forEach((v)=>{                        
            letter = letter.replace(v," ");            
        })
        answer += letter.replace(/\s/g,"").length === 0 ? 1 : 0;
    })
    
    return answer;
}