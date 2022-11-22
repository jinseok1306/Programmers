function solution(n, words) {
    let number = 0;
    let order = 0;
    const wordSet = new Set();
    wordSet.add(words[0]);
    
    for(let i=1; i<words.length; i++){
        if(words[i-1].substr(-1) !== words[i].substr(0,1) || wordSet.has(words[i])){
            number = i%n+1;
            order = Math.floor(i/n)+1; 
            break;
        }
        wordSet.add(words[i]);
    }

    return [number,order];
}