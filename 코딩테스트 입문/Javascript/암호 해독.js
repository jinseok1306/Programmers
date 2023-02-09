function solution(cipher, code) {
    let answer = cipher.split('').map((v,i)=>((i+1)%code)===0?v:'').join('');
    return answer;
}