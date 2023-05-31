function solution(a, b, c, d) {
    let answer = 0;    
    let mySet = new Set();
    let arr1 = [a,b,c,d];
    let arr2 = [];
        
    mySet.add(a);
    mySet.add(b);
    mySet.add(c);
    mySet.add(d);
    
    arr2 = [...mySet];
    
    //모두 같은 경우
    if(arr2.length===1){
        answer = 1111 * arr2[0];
    }
    //모두 다른 경우
    else if(arr2.length===4){
        answer = Math.min(...arr2);
    }
    //두면이 같고 나머지가 다른 경우
    else if(arr2.length===3){
        let p = 0;
        let qr = [];
        arr2.forEach((v)=>{
            let same_cnt = 0;
            arr1.forEach((e)=>{
                same_cnt += v===e ? 1 : 0;
            })
            
            if(same_cnt===2){
                p = v;
            }
            else {
                qr.push(v);
            }
        })            
        answer = qr[0]*qr[1];
    }
    else if(arr2.length===2){     
        let diff_cnt = 0;
        
        arr1.forEach((v)=>{
            diff_cnt += arr1[0] !== v ? 1 : 0;
        })
        
        //두개씩 같은 경우
        if(diff_cnt===2){            
            answer = (arr2[0] + arr2[1]) * Math.abs(arr2[0]-arr2[1]);
        }        
        //세 면이 같은 경우
        else{
            if(diff_cnt===3){
                answer = Math.pow((10*arr2[1]+arr2[0]),2);
            }
            else{
                answer = Math.pow((10*arr2[0]+arr2[1]),2);
            }
        }
    }
    
    return answer;
}