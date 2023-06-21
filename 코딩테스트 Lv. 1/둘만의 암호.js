function solution(s, skip, index) {
    let answer = "";
    
    s.split('').forEach((v)=>{
        //index로 다음 알파벳 구하기
        let v_ascii = v.charCodeAt();  
        
        let point = 0;

        while(point<index){
            //다음 문자 찾기            
            if(v_ascii+1<=122){
                v_ascii = v_ascii+1;
            }
            else{
                v_ascii = v_ascii+1-26;
            }            
            //해당 문자가 skip에 있는지 확인
            if(!skip.includes(String.fromCharCode(v_ascii))){
                point++;                
            }  
            
        }
        
        answer += String.fromCharCode(v_ascii);
    })
    
    return answer;
}