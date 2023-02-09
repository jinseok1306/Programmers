function solution(s) {
    const alpha = Array.from({length:26}, ()=>0);
    let answer = [];
    
    s.split('').forEach((e)=>{
         alpha[e.charCodeAt()-97]++;
    });
    
    alpha.forEach((e,i)=>{
        if(e===1){
            answer.push(String.fromCharCode(i+97));
        }
    })
                
    return answer.join('');
}