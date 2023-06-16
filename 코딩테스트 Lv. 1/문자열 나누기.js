function solution(s) {
    let answer = 0;
    let x = "";
    let arr = [0,0];
    
    s.split("").forEach((v,i)=>{
        if(x===""){
            x = v;
            arr[0]++;
        }        
        else{
            if(v===x){
                arr[0]++;
            }
            else{
                arr[1]++;
            }
        }
        
        if(arr[0]===arr[1]){
            x = "";
            arr[0] = 0;
            arr[1] = 0;
            answer++;
        }
        else if(i===s.length-1){
            answer++;
        }
    })
    
    return answer;
}