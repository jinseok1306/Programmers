function solution(food) {
    let answer = "";
    
    food.forEach((e,i)=>{
       if(i>0){
           answer += i.toString().repeat(Math.floor(e/2));
       } 
    });
    
    answer = answer + "0" + answer.split('').reverse().join('');
    
    return answer;
}