function solution(lottos, win_nums) {
    let answer = [];
    
    let winCnt = 0;
    let zeroCnt = 0;
    
    lottos.forEach((v)=>{
        if(win_nums.includes(v)){
            winCnt++;
        } 
        if(v===0){
            zeroCnt++;
        }
    });
        
    answer.push(winCnt+zeroCnt>=2?7-winCnt-zeroCnt:6);
    answer.push(winCnt>=2?7-winCnt:6);
    
    return answer;
}