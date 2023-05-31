function solution(arr) {
    let stk = [];
    let i = 0;
    
    while(arr.length>i){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
        }
        else if(stk.length>0){
            if(stk.slice(-1)[0]<arr[i]){
                stk.push(arr[i]);
                i++;
            }
            else if(stk.slice(-1)[0]>=arr[i]){
                stk.pop();
            }
        } 
    }
            
    return stk;
}