function solution(quiz) {
    let answer = [];
    
    quiz.forEach((item)=>{
        let arr = item.split('=');
        answer.push(eval(arr[0])===Number(arr[1])?"O":"X");        
    })
    
    return answer;
}