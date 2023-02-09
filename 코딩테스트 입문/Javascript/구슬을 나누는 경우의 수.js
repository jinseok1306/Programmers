function solution(balls, share) {
    let answer = factorial(balls)/(factorial(balls-share)*factorial(share));
            
    return answer;
}

function factorial(n) {
  return n ? BigInt(n) * BigInt(factorial(n - 1)) : BigInt(1);
}