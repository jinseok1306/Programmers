function solution(p) {
    let answer = '';
    let open = 0;
    let close = 0;
    
    //1
    if(!p) return '';
    
    for(let i=0; i<p.length; i++){
        if(p[i] === '(') open++;
        else close++;
        
        if(open === close){
            //2, 2, 3-1
            if(check(p.slice(0,i+1))){
                answer = p.slice(0,i+1) + solution(p.slice(i+1));
                return answer;
            }
            else{
                //4-1, 4-2, 4-3
                answer = '(' + solution(p.slice(i+1)) + ')';
                
                //4-4
                for(let j=1; j<i; j++){
                    if(p[j] === '('){
                        answer = answer + ')';
                    }
                    else{
                        answer = answer + '(';
                    }
                }
                //4-5
                return answer;
            }
        }
    }
    
    return answer;
}

function check(p) {
    let stack = [];
    for(let i=0; i<p.length; i++){
        if(p[i] === '(') stack.push('(');
        else{
            if(stack.length===0) return false;
            stack.pop();
        }
    }
    return true;
}