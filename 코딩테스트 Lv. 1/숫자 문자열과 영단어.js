function solution(s) {    
    const num_arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];    
    
    num_arr.forEach((v,i)=>{
        let num = new RegExp(v,'g');
        s = s.replace(num,i);
    });
    
    return Number(s);
}