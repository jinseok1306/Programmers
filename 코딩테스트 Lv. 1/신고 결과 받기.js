function solution(id_list, report, k) {
    const answer = Array(id_list.length).fill(0);
    const report_list = {}; //신고 유저 리스트
    
    id_list.map((user)=>{
        //key : user id(신고당한 유저), value : 빈 배열(신고한 유저)
        report_list[user] = [];        
    });
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ');
        //동일한 사람이 유저를 신고했는지 체크
        if(!report_list[report_id].includes(user_id)){
            //신고당한 유저에 신고한 유저 값 추가
            report_list[report_id].push(user_id);
        }
    });
    
    for(const key in report_list){
        //이용정지대상 체크
        if(report_list[key].length>=k){
            //유저가 정지된 ID를 신고했는지 체크
            report_list[key].map((user)=>{
               answer[id_list.indexOf(user)]+=1;
            });
        }
    }
    
    return answer;
}