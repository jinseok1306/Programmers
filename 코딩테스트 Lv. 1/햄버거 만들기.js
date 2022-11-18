function solution(ingredient) {
    let stack = [];
    let answer = 0;
    
    ingredient.forEach((item)=>{
       stack.push(item) ;
        
        if(stack.length>=4){
            const hambuger = stack.slice(-4).join("");
            
            if(hambuger === "1231"){
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                
                answer++;
            }
        }
    });
            
    return answer;
}