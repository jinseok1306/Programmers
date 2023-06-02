function solution(strArr) {
    let answer = strArr.filter((v)=>!v.includes("ad"));
    return answer;
}   