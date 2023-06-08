function solution(arr) {
    let answer = 0;    
    
    while(1){
        let before = arr.join("&");
        let after = "";
        arr.forEach((v,i)=>{
            if(v>=50 && v%2===0){
                arr[i] = v/2;
            }
            else if(v<50 && v%2!==0){
                arr[i] = v*2 + 1;
            }
        })
        after = arr.join("&");        
        if(before === after){
            break;
        }
        answer++;
    }
            
    return answer;
}