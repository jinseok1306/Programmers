function solution(n, lost, reserve) {            
    let arr = Array(n).fill(1).map((v,i)=>lost.includes(i+1)?v-1:v).map((v,i)=>reserve.includes(i+1)?v+1:v);
    
    arr.forEach((v,i)=>{
        if(v===0){
            if(i===0){
                if(arr[i+1]===2){
                    arr[i]=1;
                    arr[i+1]=1;
                }
            }   
            else if(i===arr.length-1){
                if(arr[i-1]===2){
                    arr[i]=1;
                    arr[i-1]=1;
                }
            }
            else{
                if(arr[i-1]===2){
                    arr[i]=1;
                    arr[i-1]=1;
                }
                else if(arr[i+1]===2){
                    arr[i]=1;
                    arr[i+1]=1;
                }
            }
        }
    });
            
    return arr.filter((v)=>v>=1).length;
}