//시간을 분으로 변경하는 함수
const changeInt = (time) => {
    let [hour, minute] = time.split(':');
    return parseInt(hour)*60 + parseInt(minute);
}

function solution(book_time) {
    let answer = [];
    
    book_time.sort().forEach(time=>{        
        const start = changeInt(time[0]);
        const end = changeInt(time[1]);
        
        if(answer.length === 0){
            answer.push(end+10);
        }
        else{
            answer = answer.sort(); //가장 이른 시간을 정렬
            let flag = true; //방 교환되었는지 체크
            for(let i=0; i<answer.length; i++){
                if(answer[i]<=start){
                    //입실시간보다 빠른 청소되어있는 방이 있으면
                    answer[i] = end+10; //퇴실시간 + 10
                    flag = false; //체크
                    break;
                }
            }
            
            //체크가 한번도 안되었으면 새로운 방에 퇴실시간 + 10
            if(flag) answer.push(end+10);
        }
    })
                              
    return answer.length;
}