function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    
    let bunmo = lcm(num1,num2);
    let bunza = bunmo/num1*denum1 + bunmo/num2*denum2;
    
    
    answer.push(bunza/gcd(bunza,bunmo));
    answer.push(bunmo/gcd(bunza,bunmo));
    
    return answer;
}