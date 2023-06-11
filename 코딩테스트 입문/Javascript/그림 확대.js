function solution(picture, k) {
    let answer = [];
    picture = picture.map((v)=> v.split("").map((e)=>e.repeat(k)).join(""));
    
    picture.forEach((v)=>{
        for(let i=0; i<k; i++){
            answer.push(v);
        }
    })
    
    return answer;
}