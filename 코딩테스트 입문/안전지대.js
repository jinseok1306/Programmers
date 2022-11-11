function solution(board) {
    var answer = 0;
    let row = board.length;
    
    board.forEach((v,k)=>v.forEach((v2,k2)=>{
        let [x,y] = [0,0];
        let column = v.length;
        
        //지뢰 위치 확인
        if(v2===1){
            [x,y] = [k,k2];
            
            //지뢰 주변 위험지역으로 분류            
            board[(x-1)>=0?x-1:0][(y-1)>=0?y-1:0] = board[(x-1)>=0?x-1:0][(y-1)>=0?y-1:0] === 1 ? 1 : 2; //11시 방향
            board[(x-1)>=0?x-1:0][y] = board[(x-1)>=0?x-1:0][y] === 1 ? 1 : 2; //9시 방향
            board[(x-1)>=0?x-1:0][(y+1)<row?y+1:row-1] = board[(x-1)>=0?x-1:0][(y+1)<row?y+1:row-1] === 1 ? 1 : 2;//7시 방향
            board[x][(y-1)>=0?y-1:0] = board[x][(y-1)>=0?y-1:0] === 1 ? 1 : 2; //12시 방향
            board[x][(y+1)<row?y+1:y] = board[x][(y+1)<row?y+1:y] === 1 ? 1 : 2; //6시 방향
            board[(x+1)<column?x+1:x][(y-1)>=0?y-1:0] = board[(x+1)<column?x+1:x][(y-1)>=0?y-1:0] === 1 ? 1 : 2; //1시 방향            
            board[(x+1)<column?x+1:x][y] = board[(x+1)<column?x+1:x][y] === 1 ? 1 : 2; //3시 방향                        
            board[(x+1)<column?x+1:x][(y+1)<row?y+1:y] = board[(x+1)<column?x+1:x][(y+1)<row?y+1:y] === 1 ? 1 : 2; //5시 방향
        }                
    }));
    
    board.forEach((v,k)=>v.forEach((v2,k2)=>{
        answer += v2===0?1:0;
    }));
                                   
    
    return answer;
}