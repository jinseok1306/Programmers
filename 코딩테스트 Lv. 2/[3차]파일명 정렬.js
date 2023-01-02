function solution(files) {
    files.sort((prev, cur) => {  
        const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()];
        
        //정규식 그룹화 캡처를 활용하여 head,number를 추출
        const arrPrev = upperPrev.match(/(\D+)(\d+)/);
        const arrCur = upperCur.match(/(\D+)(\d+)/);        
        
        //먼저 head로 비교
        if(arrPrev[1]>arrCur[1]){
           return 1; 
        }
        else if(arrPrev[1]<arrCur[1]){
            return -1;
        }
        //head가 일치할 경우 number로 비교
        else{
            return Number(arrPrev[2])-Number(arrCur[2])
        }
        
    });

    return files;
}