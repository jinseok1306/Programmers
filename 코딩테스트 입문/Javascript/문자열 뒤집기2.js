function solution(my_string, s, e) {
    let answer = my_string.substr(0,s) + my_string.substr(s,e-s+1).split("").reverse().join("") + my_string.substr(e+1);

    return answer;
}