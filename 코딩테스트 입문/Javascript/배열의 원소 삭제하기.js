function solution(my_string) {
    let answer = my_string.split("").map((v,i)=>my_string.slice((i+1)*-1)).sort();

    return answer;
}