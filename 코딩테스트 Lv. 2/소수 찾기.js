function solution(numbers) {
    let answer = 0;
    
    let arr = [];
    const used = Array(numbers.length).fill(0);
    const mySet = new Set();
    
    
    arr = numbers.split('').map(Number);
    
    function dfs(count,text){
        if(count<=arr.length && text != ""){
            mySet.add(Number(text));
        }
        else if(count>arr.length){
            return;
        }
        
        for(let i=0; i<arr.length; i++){
            let current = arr[i];
            
            if(!used[i]){
                used[i] = 1;
                dfs(count+1,text+current.toString());
                used[i] = 0;
            }                        
        }
    }
    
    dfs(0,"");
    
    let n = Math.max(...[...mySet]);
    const primeNumber = Array(n+1).fill(true);
    
    for(let i=2; i<=Math.ceil(Math.sqrt(n)); i++){
        if(primeNumber[i]){
            let m = 2;
            while(i*m<=n){
                primeNumber[i*m] = false;
                m++;
            }
        }
    }
    
    primeNumber[0] = false;
    primeNumber[1] = false;
    
    [...mySet].forEach((v)=>{        
        if(primeNumber[v]){
            answer++;
        }
    })
    
    return answer;
}