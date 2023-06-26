function solution(topping) {
    let answer = 0;
    const allTopping = new Map();
    const bro = new Map();
    
    //Map 자료구조에 각 토핑의 개수가 몇개인지 넣어준다.    
    topping.forEach((v)=>{
        allTopping.set(v, (allTopping.get(v) || 0)+1);
    });
    
    for(let n of topping){
        //토핑을 하나씩 확인하면서 자른다
        allTopping.set(n, allTopping.get(n) -1);
        
        //동생 Map에 토핑 종류 추가
        bro.set(n, true);
        
        //토핑 갯수가 0인 경우 Map에서 삭제
        if(!allTopping.get(n)) allTopping.delete(n);
        
        //동생과 토핑 갯수가 같은 경우 카운트
        if(allTopping.size === bro.size) answer++;
        
        //동생의 토핑 종류가 더 많은 경우 더이상 같아질 수 없기에 종료
        if(allTopping.size < bro.size) break;
    }
    
  
    
    return answer;
}