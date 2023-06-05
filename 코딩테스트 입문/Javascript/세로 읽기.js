function solution(my_string, m, c) {
    let answer = "";
    
    let arr = chunkString(my_string,m);

    answer = arr.map((v)=>v[c-1]).join("");
    
    return answer;
}

function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
}