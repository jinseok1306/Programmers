function solution(myString, pat) {
    let answer = myString.split("").map((v)=>v==="A"?"B":"A").join("").includes(pat);
    
    return answer?1:0;
}