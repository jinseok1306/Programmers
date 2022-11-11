function solution(lines) {
    let answer = 0;
    
    let arr = Array(202).fill(0);
    
    for(let i=0; i<3; i++){
        for(let j=lines[i][0]; j<lines[i][1]; j++){
            if(arr[j+100]<=1){
                arr[j+100]++;
            }
        }
    }    
    answer = arr.filter(v=>v>=2).length;
        
    return answer;
}