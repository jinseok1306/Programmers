function solution(money) {
    let answer = [];
    let max_coffee = 0;
    let changes = 0;
    
    max_coffee = parseInt(money/5500);    
    changes = money%5500;
    
    answer.push(max_coffee);
    answer.push(changes);
    
    return answer;
}