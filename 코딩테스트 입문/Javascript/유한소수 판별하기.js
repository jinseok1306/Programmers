function solution(a, b) {
    let answer = 0;
    const gcd = (x, y) => x % y === 0 ? y : gcd(y, x % y);

    let num = b/gcd(a,b);
    let my_set = new Set();
    let count = 2;
    
    while(num>1){
        if(num%count===0){
            my_set.add(count);
            num=num/count;
            count=2;
        }
        else{
            count++;
        }        
    }
    
    answer = [...my_set].find(v=> v!==2 && v!==5) === undefined ? 1 : 2; 
    
    return answer;
}