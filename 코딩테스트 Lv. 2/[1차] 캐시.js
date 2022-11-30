function solution(cacheSize, cities) {
    let answer = 0;
    let stack = [];
    
    cities = cities.map((v)=>v.toLowerCase());
    
    cities.forEach((v)=>{
        let index = stack.indexOf(v);
        
        //이미 같은 값이 있을 경우 hit
        if(index >= 0){
            //해당값을 지우고
            stack.splice(index,1);
            
            //맨 앞에 추가
            stack.unshift(v);
            
            answer += 1;
        }
        //값이 없을 경우 miss
        else{
            //캐시 크기를 초과한 경우
            if(stack.length>=cacheSize){
                //가장 오래된 항목 제거
                stack.pop();                
            }
            
            if(cacheSize>0){
                stack.unshift(v);    
            }            
            answer += 5;
        }                
    });    
    
    return answer;
}