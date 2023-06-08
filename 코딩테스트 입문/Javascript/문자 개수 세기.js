function solution(my_string) {
    let answer = [];    
    let alphaObj = {};
    
    //A-Z 객체 생성
    for(let i=65; i<=90; i++){
        alphaObj[String.fromCharCode(i)] = 0;
    }
    
    //a-z 객체 생성
    for(let j=97; j<=122; j++){
        alphaObj[String.fromCharCode(j)] = 0;
    }
    
    my_string.split("").forEach((v)=>{
        alphaObj[v]++; 
    })
    
    answer = Object.values(alphaObj);
    
    return answer;
}