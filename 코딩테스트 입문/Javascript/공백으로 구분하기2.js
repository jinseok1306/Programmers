function solution(my_string) {
    let answer = my_string.trim().replace(/\s+/g,"&").split("&");
    return answer;
}