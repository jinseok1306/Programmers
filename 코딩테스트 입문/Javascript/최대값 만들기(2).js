function solution(numbers) {    
    let max = -100000000;
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            max = (numbers[i]*numbers[j])>=max ? numbers[i]*numbers[j] : max; 
        }
    }
        
    return max;
}