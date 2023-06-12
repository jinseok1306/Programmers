function solution(rank, attendance) {
    var answer = 0;
    let arr = [];
    
    attendance.forEach((v,i)=>{
        if(v){
            arr.push(rank[i]);
        }
    })
    
    arr.sort((a,b)=>a-b);
                    
    answer = 10000 * rank.indexOf(arr[0]) + 100 * rank.indexOf(arr[1]) + rank.indexOf(arr[2]);
    
    return answer;
}