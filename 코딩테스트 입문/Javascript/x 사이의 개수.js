function solution(myString) {
    let answer = myString.split("x").map((v)=>v.length);
    
    return answer;
}