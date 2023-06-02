function solution(myString) {
    let answer = myString.split("x").filter((v)=>v!=="").sort();
    return answer;
}