function solution(arr1, arr2) {
    const answer = [];            
    
    for(let i=0; i<arr1.length; i++){
        let data = [];
        for(let j=0; j<arr2[0].length; j++){        
            let calcu = 0;
            for(let k=0; k<arr2.length; k++){
                calcu += arr1[i][k]*arr2[k][j];
            }
            data.push(calcu);
        }
        answer.push(data);
    }
        
    return answer;
}