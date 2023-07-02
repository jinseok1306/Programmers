function solution(board)
{
    const row = board.length;
    const col = board[0].length;
    
    //열, 행 중에서 길이가 1인 경우 정사각형은 1보다 크게 만들 수 없기에 1 반환
    if(row < 2 || col < 2) return 1;
    
    //가장 위쪽 행과 가장 왼쪽 열만 제외하고 반복
    for(let i=1; i<row; i++){
        for(let j=1; j<col; j++){            
            //요소가 1인 경우
            if(board[i][j] === 1){
                //해당 요소의 왼쪽, 왼쪽 대각산, 위쪽의 숫자들 중 가장 작은 수에 1을 더한 수를 해당 요소의 값으로 변경
                //이렇게 진행하면 각 요소들이 가지는 값은 해당 요소 자리를 가자 오른쪽 아래에 두고 형성할 수 있는 정사각형의 최대길이가 된다.
                board[i][j] = Math.min(board[i][j-1], board[i-1][j], board[i-1][j-1]) +1;                
            }
        }
    }
    
    //가장 최대 길이를 추출 후 정사각형 넓이 계산
    return Math.max(...board.reduce((a,c)=>[...a, Math.max(...c)], [])) ** 2;
}