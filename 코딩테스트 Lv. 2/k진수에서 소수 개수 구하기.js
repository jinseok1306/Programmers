function solution(n, k) {
    const numbers = n.toString(k).split('0').map(Number);
    return numbers.reduce((acc, num) => {
        if (num <= 1) {
            return acc;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return acc;
            }
        }
        return acc + 1;
    }, 0);
}
