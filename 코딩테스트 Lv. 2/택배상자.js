function solution(order) {    
    let answer = 0;
    let stack = [];
    let idx = 0;
    
    //컨베이어 벨트는 1번부터 순차적으로 오기에 길이만큼 반복
    for(let i=1; i<= order.length; i++){

        //택배기사의 요청과 같은 번호인지 확인
        if(order[idx] !== i){  
            //아닐 경우 보조벨트에 두기          
            stack.push(i);
        }
        else{
            //맞을 경우 다음 찾을 Index 변경
            idx++;            
        }
        
        //보조 벨트에서 택배기사가 요청한 번호가 있는지 확인
        while(stack.length !==0 && stack.at(-1) === order[idx]){
            stack.pop();
            idx++;
        }
    }

    answer = idx;
                        
    return answer;
}