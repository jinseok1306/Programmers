function solution(arr1, arr2) {
    var answer = 0;
    
    if(arr1.length>arr2.length){
        answer = 1;
    }
    else if(arr1.length<arr2.length){
        answer = -1;
    }
    else{
        let arr1_sum = arr1.reduce((a,c)=>a+c);
        let arr2_sum = arr2.reduce((a,c)=>a+c);
        
        if(arr1_sum>arr2_sum){
            answer = 1;
        }
        else if(arr1_sum<arr2_sum){
            answer = -1;
        }
        else{
            answer = 0;
        }
    }
    
    return answer;
}