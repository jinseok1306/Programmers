function solution(numbers, k) {
    let answer = numbers[(2*k-1)%(numbers.length)-1];
    
    return answer;
}