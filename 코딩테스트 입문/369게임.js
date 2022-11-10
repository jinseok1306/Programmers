function solution(order) {
    let answer = order.toString().split('').map(Number).filter(v=>v%3===0 && v!==0);
    return answer.length;
}