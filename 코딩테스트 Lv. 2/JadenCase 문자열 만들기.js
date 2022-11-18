function solution(s) {
    let answer = s.toLowerCase().split(" ").map((v)=>v.replace(/^[a-z]/, char => char.toUpperCase())).join(" ");
                    
    return answer;
}