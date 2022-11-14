function solution(s, n) {
    let arr = s.split("");
    let answer = [];
    
    arr.forEach((v)=>{        
        let index = v.charCodeAt(0);
        let letter = "";        
        let count = n%26;

        if(index >=65 && index<=90){
            letter = String.fromCharCode((index-65+count)%26+65);
        }
        else if(index >=97 && index<=122){
            letter = String.fromCharCode((index-97+count)%26+97);
        }
        else {
            letter = v;
        }
        answer.push(letter);
    });
    
    return answer.join("");
}