function solution(record) {
    let answer = [];    
    let idObj = new Object();
    
    //가장 마지막에 사용된 닉네임을 아이디와 매핑
    record.forEach((v)=>{
        let arr = v.split(' ');
        
        if(arr[0] === "Enter" || arr[0] === "Change"){
            idObj[arr[1]] = arr[2];     
        }                
    });
    
    record.forEach((v)=>{
        let arr = v.split(' ');
        
        if(arr[0] === "Enter"){
            answer.push(`${idObj[arr[1]]}님이 들어왔습니다.`);
        }
        else if(arr[0] === "Leave"){
            answer.push(`${idObj[arr[1]]}님이 나갔습니다.`);
        }        
    });
    
    return answer;
}