function solution(n)
{
    let answer = 1;

    while(n>1){
        answer += n%2;
        n = Math.floor(n/2);
    }

    return answer;
}