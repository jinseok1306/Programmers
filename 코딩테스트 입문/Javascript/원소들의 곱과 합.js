function solution(num_list) {
    let answer = 0;
    
    let sum_val = num_list.reduce((a,c)=>{
        return a+c
    });
    
    let mul_val = num_list.reduce((a,c)=>{
        return a*c
    });
    
    answer = mul_val<Math.pow(sum_val,2) ? 1 : 0;
    
    return answer;
}