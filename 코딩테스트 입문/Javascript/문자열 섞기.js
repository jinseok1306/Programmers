function solution(str1, str2) {
    let answer = '';
    let arr = str2.split('');
    
    answer = str1.split('').map((v,i)=>{
       return v+arr[i] 
    }).join('')
    
    return answer;
}