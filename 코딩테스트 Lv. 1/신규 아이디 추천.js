function solution(new_id) {
    let answer = '';
    
    //1단계
    new_id = new_id.toLowerCase();        
    //2단계        
    new_id = new_id.replace(/[^a-z0-9\-\_\.]/g,"");    
    //3단계
    new_id = new_id.replace(/\.+/g,".");        
    //4단계
    new_id = new_id.replace(/^\.|\.$/g,"");        
    //5단계
    new_id = new_id.replace(/^$/,"a");    
    //6단계
    new_id = new_id.slice(0,15).replace(/\.$/,"");    
    //7단계    
    answer = new_id.length<=2 ? new_id.padEnd(3,new_id.slice(-1)) : new_id;
    
    return answer;
}