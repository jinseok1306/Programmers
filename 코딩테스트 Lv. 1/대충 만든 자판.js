function solution(keymap, targets) {
    let answer = [];
    
    targets.forEach((v)=>{      
        let sum = 0;
        v.split("").some((item)=>{
            let arr = new Array(keymap.length).fill(0);
            
            keymap.forEach((e,i)=>{
                if(e.indexOf(item)>=0){
                    arr[i] = e.indexOf(item)+1;                     
                }         
                else{
                    arr[i] = -1;    
                }
            })
            //키가 없는 경우 종료
            if(arr.length === arr.filter((v)=>v===-1).length){
                sum = -1;
                return true;
            }
            else{            
                //키가 있는 경우 한번도 못누른 경우 필터링 후 최소값 추출
                sum += Math.min(...arr.filter((v)=>v>=0));         
            }                                                                         
        })
        answer.push(sum);        
    })
    
    return answer;
}