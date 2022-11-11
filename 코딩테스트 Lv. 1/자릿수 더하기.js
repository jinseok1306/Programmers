function solution(n)
{
    let answer = n.toString().split('').reduce((p,c)=>p+Number(c),0);

    return answer;
}