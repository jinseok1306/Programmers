function solution(name, yearning, photo) {
    let answer = [];
    let myObj = {};
    
    name.forEach((v,i)=>{
        myObj[v] = yearning[i];
    })
        
    photo.forEach((v)=>{
        let arr = [];
        let sum = 0;
        
        v.forEach((e)=>{
            if(e in myObj){
                arr.push(myObj[e]);
            }
        })
                        
        if(arr.length>0){
            sum = arr.reduce((a,c)=>a+c);            
        }
        answer.push(sum);
    })
    
    return answer;
}