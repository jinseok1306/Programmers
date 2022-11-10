function solution(polynomial) {    
    let answer = [];   
    let char_num = 0;
    let num = 0;
                                
    //문자
    let arr1 = polynomial.match(/\d+x|x/g);
            
    if(!!arr1){
        char_num = arr1
            .map((v)=>Number(v.replace('x',''))===0?1:Number(v.replace('x','')))
            .reduce((p,c)=>p+c,0);
    }    
         
    //숫자
    let arr2 = polynomial.split(' + ').map((v)=>v.replace(/\d+x|x/g,"0")).reduce((p,c)=>p+Number(c),0);    
    
    if(!!arr2){
        num = arr2;
    } 
    
    //총 합산
    if(!!char_num){        
        answer.push(`${char_num===1?'':char_num}x`);
    }
    
    if(!!num){
        answer.push(`${num}`);
    }
    
    return answer.join(" + ");
}