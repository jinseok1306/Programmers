function solution(progresses, speeds) {
    var answer = [];
    let days = [];
    
    progresses.forEach((v,i)=>{
        days.push(Math.ceil((100-v)/speeds[i]));     
    });
    
    let publish = 1;
    let base_day = days[0];
    console.log(days);
    for(let i=1; i<days.length+1; i++){
        if(base_day>=days[i]){
            publish++;            
        }
        else{
            answer.push(publish);
            publish = 1;
            base_day = days[i];
        }
    }

    return answer;
}