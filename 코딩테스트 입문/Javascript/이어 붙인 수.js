function solution(num_list) {
    let answer = 0;
    let [odd_sum,even_sum] = ["",""];
    
    num_list.forEach((v)=>{
        if(v%2===0){
            even_sum += v.toString();
        }
        else{
            odd_sum += v.toString();
        }
    })
    
    answer = Number(odd_sum) + Number(even_sum);
    
    return answer;
}