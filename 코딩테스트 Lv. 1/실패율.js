function solution(N, stages) {        
    //스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수
    let notClearCnt = Array(N+1).fill(0).map((v,i)=>stages.filter((e)=>e===i).length);
    //스테이지에 도달한 플레이어 수
    let clearCnt = Array(N+1).fill(0).map((v,i)=>stages.filter((e)=>e>=i).length);
    
    //스테이지 별 실패율 계산
    let arr = Array(N+1).fill(0)
                        .map((v,i)=>
                        !isNaN((notClearCnt[i] / clearCnt[i]))
                        ?(notClearCnt[i] / clearCnt[i]):0);
        
    arr.shift(); //0번째 값은 제거(이후 스테이지 번호 찾을 때 불필요)
    
    //Set를 사용하여 스테이트 번호 저장
    let answer = new Set();
    //실패율이 높은 순서대로 정렬
    let desc_arr = [...arr].sort((a,b)=>b-a);
    
    //실패율이 일치하는 Index값을 스테이지 번호로 저장
    //이때 동일한 값을 가진 Index가 더 있을 수 있기에 반복문으로 전부 체크 후 저장
    //Index가 반복적으로 저장될 수 있기에 Set을 사용했음
    desc_arr.forEach((v)=>{
        let idx = arr.indexOf(v);
        while (idx != -1) {
              answer.add(idx+1);
              idx = arr.indexOf(v, idx + 1);
        }                                                  
    });
    
    return [...answer];
}