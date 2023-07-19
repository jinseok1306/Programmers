function solution(k, d) {
    let answer = 0;
    
    //x좌표 값 만큼 반복 실행
    for(let x=0; x<=d; x+=k){
        //원점과의 거리 y의 좌표를 계산
        let y = parseInt(Math.sqrt(d**2-x**2));
        
        //y좌표 내부 찍을 수 있는 점의 개수
        answer += parseInt(y/k)+1;
    }
        
    return answer;
}