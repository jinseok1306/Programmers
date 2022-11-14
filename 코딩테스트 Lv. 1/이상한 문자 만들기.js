function solution(s) {
    let answer = [];
    
    let arr = s.split(" ");
    
    arr.forEach((item)=>{
       let change_val = item.split("").map((v,i)=>i%2===0 ? v.toUpperCase() : v.toLowerCase()).join("");
        
       answer.push(change_val);
    });
    
    return answer.join(" ");
}