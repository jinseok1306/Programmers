function solution(num_list) {
    let answer = 0;
    let [odd,even] = [0,0];
    
    num_list.forEach((v,i)=>{
        if(i%2===0){
            even+=v;
        }
        else{
            odd+=v;
        }
    })
    
    answer = (even > odd) ? even : odd;
    
    return answer;
}