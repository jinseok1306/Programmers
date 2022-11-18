function solution(s) {    
    let zero_cnt = 0;
    let trans_cnt = 0;
    let length = s.length;
    
    while(s!=="1"){
        length = s.length;
        s = s.replace(/0/g,"");
        zero_cnt += length - s.length;
        s = (s.length).toString(2);
        trans_cnt++;
    }    
        
    return [trans_cnt,zero_cnt];
}