function solution(n) {
    const stack = [];
    do{
        if(n % 3 === 0){ 
            stack.push(4);
            n = Math.floor(n / 3) - 1;
        }else{
            stack.push(n % 3);
            n = Math.floor(n / 3);
        }
    }while(n > 0); 

    return stack.reverse().join('');
}