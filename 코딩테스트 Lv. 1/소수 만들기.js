function solution(nums) {
    let answer = 0;
    const max = 3000;
    
    const primeNumber = Array(max+1).fill(true);
    
    for(let i=2;i<=Math.ceil(Math.sqrt(max)); i++){
        if(primeNumber[i]){
            let m = 2;
            while(i*m<=max){
                primeNumber[i*m] = false;
                m++;
            }
        }
    }
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                if(primeNumber[nums[i]+nums[j]+nums[k]]){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}