function solution(n, k) {
    let answer = [];
    //1~n까지 배열 생성
    let arr = new Array(n).fill(0).map((v,i)=>i+1);

    //n!
    let fac = arr.reduce((a,c)=>a*c,1);

    //인덱스로 활용하기 위해서 1빼기
    k--;
    
    //첫번째 자리수부터 찾아나가는 과정
    while(answer.length!==n){
        //해당 자리를 제외한 팩토리얼 계산
        fac = fac/arr.length;
        //해당 자리에 값 저장
        let temp = arr[Math.floor(k/fac)];
        answer.push(temp);
        //다음 자릿수를 계산하기 위해 k 값 변경
        k = k%fac;
        //이미 사용된 숫자는 베열에서 제외
        arr = arr.filter(v=>v!==temp);
    }
    
    return answer;
}