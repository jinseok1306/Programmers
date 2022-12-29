function solution(elements) {    
    let mySet = new Set();
    let count = 1;
    
    for(let i=0; i<elements.length; i++){
        for(let j=0; j<elements.length; j++){
            //원형수열이기에 길이 넘어가면 다음에 연결된 값을 더하여 계산
            if(j+count>elements.length){
                let arr = [...elements.slice(j,elements.length)
                           ,...elements.slice(0,j+count-elements.length)];
                mySet.add(arr.reduce((a,b)=>a+b,0));
            }
            else{
                mySet.add(elements.slice(j,j+count).reduce((a,b)=>a+b,0)); 
            }
        }
        count++;
    }
    
    
    return mySet.size;
}