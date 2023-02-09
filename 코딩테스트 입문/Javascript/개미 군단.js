function solution(hp) {
    let answer = 0;
    let [first,second,third] = [0,0,0];
    
    first = parseInt(hp/5);
    hp = hp - first*5;
    
    second = parseInt(hp/3);
    hp = hp - second*3;
    
    third = hp;
    
    answer = first + second + third;
    
    return answer;
}