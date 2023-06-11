function solution(arr) {
    let answer = [[]];
    
    let outLength = arr.length;
    let inLength = arr[0].length;
    
    if(outLength > inLength){
        arr.forEach((v,i)=>{
            for(let j=0; j<outLength-inLength; j++){
                arr[i].push(0);
            }            
        })
    }
    else if(outLength < inLength){
        let tempArr = Array(inLength).fill(0);
        for(let i=0; i<inLength-outLength; i++){
            arr.push(tempArr);
        }
    }
    
    answer = arr;
    
    return arr;
}