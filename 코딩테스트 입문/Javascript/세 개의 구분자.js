function solution(myStr) {
    let answer = myStr.replace(/[a|b|c]/g," ").trim().split(" ").filter((v)=>v!=="");
    return answer.length>0 ? answer : ["EMPTY"];
}