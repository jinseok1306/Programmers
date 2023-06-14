function solution(cards1, cards2, goal) {
    let answer = "No";
    let arr = [];
    
    goal.some((v)=>{                
        if(cards1.indexOf(v)==0){                                  
            arr.push(v);     
            cards1.shift();
        }
        else if(cards2.indexOf(v)==0){                                
            arr.push(v);   
            cards2.shift();                        
        } 
        else{
            return true;
        }
    })
    
    if(JSON.stringify(arr)===JSON.stringify(goal)){
        answer = "Yes";
    }
    
    return answer;
}