function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n; i++){
        let row = (arr1[i] | arr2[i]).toString(2).split('').map((v)=>v==='1'?'#':' ').join(''); 
        
        if(row.length<n){
            row = " ".repeat(n-row.length) + row;
        }        
        answer.push(row);
    }    
    return answer;
}
