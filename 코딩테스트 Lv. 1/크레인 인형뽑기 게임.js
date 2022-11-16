function solution(board, moves) {   
    let answer = 0;
    const base_arr = Array.from({ length: board.length }, () => []);
    let basket = [];
    
    //인형뽑기 기계에 인형 쌓기
    board.forEach((v)=>{
        for(let j=0; j<board.length; j++){
            //0의 경우 빈 공간이기에 무시
            if(v[j]!==0){
                base_arr[j].push(v[j]);
            }            
        }    
    });
    
    moves.forEach((v)=>{
        //크레인이 집을 수 있는 인형이 있는 경우
        if(base_arr[v-1].length>0){
            if(basket.length>0){
                if(basket[basket.length-1]===base_arr[v-1][0]){
                    basket.pop();
                    base_arr[v-1].shift();
                    answer+=2;
                }
                else{
                    basket.push(base_arr[v-1].shift());
                }
            }   
            else{
                basket.push(base_arr[v-1].shift());
            }                                                
        }
    });
        
    return answer;
}