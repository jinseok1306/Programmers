function solution(msg) {
    const answer = [];    
    const dictionary = ['A','B','C','D','E','F','G','H','I',
                        'J','K','L','M','N','O','P','Q','R','S',
                        'T','U','V','W','X','Y','Z'];
    
    const arr = msg.split('');
    
    for(let i=0; i<arr.length; i++){
        let voca = arr[i]
        let index = -1;
        
        while(1){
            let voca_index = dictionary.indexOf(voca);
            //현재 입력값이 사전에 있는 경우
            if(voca_index>=0){
                index = voca_index;
                //다음 글자를 포함해서 있는 경우
                if(dictionary.indexOf(voca+arr[i+1])>=0){
                    voca = voca+arr[i+1];
                    i++;
                }                
                //다음 글자를 포함해서 없는 경우
                else{
                    dictionary.push(voca+arr[i+1]);
                    break;
                }
            }
        }  
        answer.push(index+1);
    }
    
    return answer;
}