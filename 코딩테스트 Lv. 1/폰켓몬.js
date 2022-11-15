function solution(nums) {
    let answer = 0;
    
    const numSet = new Set();
    
    nums.forEach((v)=>{
       numSet.add(v); 
    });
    
    answer = (numSet.size<nums.length/2)?numSet.size:nums.length/2;
    
    return answer;
}