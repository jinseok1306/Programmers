function solution(babbling) {
    let answer = 0;
    
    const voca = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((e)=>{
        let letter = e;        
        voca.forEach((v)=>{
            let regex1 = new RegExp(`(${v}){2,}`,'g');
            letter = letter.replace(regex1,"*");
            
            let regex2 = new RegExp(v,'g');
            letter = letter.replace(regex2," ");
        });        
        answer += letter.replace(/\s/g,"").length===0?1:0;
    });
    
    return answer;
}