function solution(score) {
    var answer = [];
    
    let score_arr = score.map((v,i)=>(v[0]+v[1])/2);
    let rank_arr = [...score_arr].sort((a,b)=>b-a);
        
    score_arr.forEach((e)=>{
        answer.push(rank_arr.indexOf(e)+1);
    });
    
    return answer;
}