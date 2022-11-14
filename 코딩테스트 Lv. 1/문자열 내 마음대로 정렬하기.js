function solution(strings, n) {
    let answer = strings.sort().sort((a,b)=> a.substr(n,1)==b.substr(n,1)?0:a.substr(n,1)>b.substr(n,1)?1:-1);
    
    return answer;
}