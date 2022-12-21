function solution(fees, records) {
    let answer = [];    
    const [base_time,base_fee,unit_time,unit_fee] = fees;
    const mySet = new Set();
        
    //차량번호 정리
    records.forEach((item)=>{
        let arr = item.split(' ');
        mySet.add(arr[1]);        
    });
    
    //차량번호 오른차순 정렬
    const car_num = [...mySet].sort();
    
    //차량번호 비용 체크
    car_num.forEach((v)=>{
        let in_time = "";
        let out_time = "";
        let acc_time = 0;
        let dateA = "";
        let dateB = "";
        let diffMSec = "";
        
        for(let i=0; i<records.length; i++){
            let arr = records[i].split(' ');
            
            if(arr[1] === v){
                if(arr[2] === "IN"){
                    in_time = arr[0];
                }
                //출차인 경우 누적시간 계산
                else if(arr[2] === "OUT"){
                    out_time = arr[0];                    
                    dateA = new Date('2022/12/25 ' + in_time);
                    dateB = new Date('2022/12/25 ' + out_time);
                    diffMSec = dateB.getTime() - dateA.getTime();
                    acc_time += diffMSec / (60 * 1000);
                    
                    //입,출차 시간 초기화
                    in_time = "";
                    out_time = "";
                }
            }
            else{
                continue;
            }
        }
        //입차는 있는데 출자가 없는 경우
        if(in_time !== "" && out_time === ""){
            //23:59분 기준으로 누적시간 계산
            out_time = "23:59";                    
            dateA = new Date('2022/12/25 ' + in_time);
            dateB = new Date('2022/12/25 ' + out_time);
            diffMSec = dateB.getTime() - dateA.getTime();
            acc_time += diffMSec / (60 * 1000);
        }        
        
        if(acc_time>base_time){
            answer.push(base_fee+Math.ceil((acc_time-base_time)/unit_time)*unit_fee);
        }
        else{
            answer.push(base_fee);
        }

    });
    
    return answer;
}