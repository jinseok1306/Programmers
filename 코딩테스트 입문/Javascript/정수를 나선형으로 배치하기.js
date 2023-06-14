function solution(n) {
    let answer = Array.from(Array(n), () => Array(n).fill(0));    
    let move = [[0,1],[1,0],[0,-1],[-1,0]]; //방향 이동값
    let num = 1; //배열에 들어갈 값
    let dir = 0; //방향 인덱스 변수
    let [x,y] = [0,0]; //좌표값
    
    while(num <= n**2){
        answer[x][y] = num;
        
        //다음 좌표값 지정
        let nextX = x + move[dir][0]; 
        let nextY = y + move[dir][1];

        //법위를 벗어나거나 이미 다음 좌표에 값이 있는 경우
        if(nextX>=n || nextY<0 || nextY>=n || nextY<0 
            || answer[nextX][nextY] !== 0){
           //좌표의 방향을 변경     
           dir = (dir + 1)%4;           
           nextX = x + move[dir][0];
           nextY = y + move[dir][1];
        }
        x = nextX;
        y = nextY;
        num++;
    }          
    return answer;
}