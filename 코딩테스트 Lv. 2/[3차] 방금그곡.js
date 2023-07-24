function solution(m, musicinfos) {
    let answer = [];
    
    //# 들어가는 음을 다른 알파벳으로 변경
    let melody = {'C#':'H','D#':'I','F#':'J','G#':'K','A#':'L'};
    
    Object.keys(melody).forEach((key)=>{
        let regex = new RegExp(`${key}`,'g');
        m = m.replace(regex,melody[key]);
    })
                
    musicinfos.forEach((v)=>{
        //배열로 변경
        let arr = v.split(",");
        
        //제목 저장
        let subject = arr[2];
                
        //시간차이 계산
        let timeLen = 0;                        
        let time1 = new Date('2023-07-24 ' + arr[0]);
        let time2 = new Date('2023-07-24 ' + arr[1]);
        
        timeLen = (time2.getTime() - time1.getTime()) / (1000*60);
        
        //전체가사 생성
        let lyrics = "";
        
        //가사에서 특정음을 변경
        Object.keys(melody).forEach((key)=>{
            let regex = new RegExp(`${key}`,'g');

            arr[3] = arr[3].replace(regex,melody[key]);
        })
        
        if(arr[3].length > timeLen){
            lyrics = arr[3].substr(0,timeLen);
        }
        else{
            let remains = timeLen%arr[3].length;
            lyrics = arr[3].repeat(timeLen/arr[3].length) + arr[3].substr(0,remains);
        }
                        
        //가사에 포함되었는지 확인 후 길이와 제목을 저장
        if(lyrics.includes(m)){
            answer.push([timeLen,subject]);
        }    
    })
    
    //길이 순으로 배열 정렬
    answer.sort((a,b)=>{
        if(a[0]===b[0]) return 0;
        return b[0]-a[0];
    })

    if(answer.length>0){
        return answer[0][1]   
    }
    else{
        return "(None)"
    }    
}