function solution(common) {
    let answer = 0;
    let num = common.length;
    
    if(common[1] / common[0] === common[2] / common[1]){
        let gongbi = common[1] / common[0];
        answer = Math.pow(gongbi,num)*common[0];
    }
    else{
        let gongcha = common[1] - common[0];
        answer = num*gongcha + common[0];
    }
    
    return answer;
}