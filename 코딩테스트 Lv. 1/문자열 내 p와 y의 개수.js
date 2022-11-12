function solution(s){
    let p_cnt = !!s.match(/p/gi) ? s.match(/p/gi).length : 0;
    let y_cnt = !!s.match(/y/gi) ? s.match(/y/gi).length : 0;
    
    let answer = (p_cnt===y_cnt)?true:false;
    
    return answer;
}