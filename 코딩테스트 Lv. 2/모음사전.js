function solution(word) {
    var answer = 0;
    
    let vowel = ['A','E','I','O','U'];
    
    let mySet = new Set();
    
    function dfs(count,text){
        if(count<=5 && text !== ""){
            mySet.add(text);
        }
        else if(count>5){
            return;
        }
        
        for(let i=0; i<vowel.length; i++){
            dfs(count+1,text+vowel[i]);
        }
    }        
    
    dfs(0,'');

    let arr = [...mySet];
    
    arr.sort();
    
    return arr.indexOf(word)+1;
}