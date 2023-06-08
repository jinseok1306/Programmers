function solution(strArr) {
    let answer = 0;    
    let myObj = {};
    
    strArr.map((v)=>{
        myObj[v.length] = myObj[v.length] ? myObj[v.length] + 1 : 1;
    })
    
    answer = Math.max(...Object.values(myObj));
             
    return answer;
}