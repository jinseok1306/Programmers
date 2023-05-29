function solution(my_string, alp) {
    let letter = new RegExp(alp,'g');
    let answer = my_string.replace(letter,alp.toUpperCase());
    return answer;
}