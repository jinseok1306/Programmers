function solution(arr) {    
    let diff = 0;
    let arr_size = [1024,512,256,128,64,32,16,8,4,2,1];
    
    for(let i=0; i<arr_size.length; i++){
        if(arr_size[i]<arr.length){
            diff = arr_size[i-1] - arr.length;
            break;
        }
    }
    
    for(let i=0; i<diff; i++){
        arr.push(0);
    }
    
    return arr;
}