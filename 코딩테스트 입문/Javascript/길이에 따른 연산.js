function solution(num_list) {
    let answer = 0;
    let flag = num_list.length >= 11 ? true : false;
       
    answer = num_list.reduce((a,c)=>{
        if(flag){
            return a + c
        }
        else{
            return a * c
        }
    })
    
    return answer;
}