function solution(str_list) {
    let answer = [];
            
    str_list.some((v,i)=>{
        if(v==="l"){
            answer = str_list.slice(0,i);            
            return true;
        }
        else if(v==="r"){
            answer = str_list.slice(i+1);            
            return true;
        }
    })
    
    return answer;
}