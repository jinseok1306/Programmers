function solution(n) {
    var answer = 0;
    let num = n+1;
    let n_cnt = n.toString(2).split("").filter((v)=>v==='1').length;
    let num_cnt = 0;
    
    while(1){
        num_cnt = num.toString(2).split("").filter((v)=>v==='1').length;
        if(n_cnt === num_cnt){            
            break;
        }
        num++;
    }
    
    return num;
}