function solution(m, n, board) {
    let answer = 0;
    
    //board를 2차원 배열로 구현
    board = board.map((row) => Array.from(row));
    
    //2x2가 없을때까지 반복
    while(1){
        //board에서 2x2에 해당하는 시작좌표를 저장
        let start_arr = [];

        for(let i=0; i<m-1; i++){
            for(let j=0; j<n-1; j++){
                let dot = board[i][j];
                
                if( dot //dot이 0이 아닌 모든 경우 true
                  && dot === board[i+1][j]
                  && dot === board[i][j+1]
                  && dot === board[i+1][j+1]){
                    start_arr.push([i,j]);
                }                             
            }
        }
        
        //시작좌표가 없는 경우 종료
        if(!start_arr.length){
            answer = board.flat().filter((v) => !v).length
            break;
        }

        start_arr.forEach(([i,j])=>{
            board[i][j] = 0;
            board[i+1][j] = 0;
            board[i][j+1] = 0;
            board[i+1][j+1] = 0;
        });

        //board에서 0인 값을 위로 올리는 작업
        for(let i=m-1; i>=0; i--){
            for(let j=0; j<n; j++){
                //0이 아닌 좌표를 찾기 위해 반복문 추가
                for(let k=i-1; k>=0; k--){
                    if(board[i][j]){
                        break;
                    }
                    //현재 좌표가 0이고 다른 좌표가 0이 아닐 경우 교체
                    if(board[k][j]){
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }                
    }
                    
    return answer;
}