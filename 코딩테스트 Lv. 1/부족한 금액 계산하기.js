function solution(price, money, count) {
    let answer = 0;
    let total = Array(count+1).fill(0).map((v,i)=>price*i).reduce((p,c)=>p+c,0);

    answer = money-total>=0?0:total-money;

    return answer;
}