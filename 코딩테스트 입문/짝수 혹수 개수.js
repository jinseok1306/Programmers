function solution(num_list) {
    let answer = [];
    let odd_num = 0;
    let even_num= 0;
    
    num_list.forEach((e)=>{
       if(e%2===0){
           even_num++;
       } 
       else{
           odd_num++;
       } 
    });    
    
    answer.push(even_num);
    answer.push(odd_num);
    
    return answer;
}