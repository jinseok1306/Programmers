function solution(my_string, letter) {
    let answer = '';
    let reg_letter = new RegExp(letter,"g");
    
    answer = my_string.replace(reg_letter,"");
    
    return answer;
}