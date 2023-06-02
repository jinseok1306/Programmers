function solution(todo_list, finished) {
    let answer = todo_list.filter((v,i)=>!finished[i]);
    return answer;
}