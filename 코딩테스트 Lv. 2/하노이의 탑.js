const answer = [];

const hanoi = (n, src, dst, mid) =>{
    //n이 1인 경우에는 바로 src->dst로 원반을 옮기면 된다.
    if(n===1) answer.push([src,dst]);
    else{
        //A기둥에 있는 n-1번째 원판을 B기둥으로 이동
        hanoi(n-1, src, mid, dst);
        //A기둥에 있는 n번째 원판을 C기둥으로 이동
        answer.push([src,dst]);
        //B기둥에 있는 n-1번째 원판을 C기둥으로 이동
        hanoi(n-1, mid, dst, src);
    }
}

function solution(n) {
    hanoi(n,1,3,2);
    
    return answer;
}