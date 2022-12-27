function solution(dirs) {
    let answer = 0;    
    let arr = [];
    
    //초기 좌표 등록
    arr.push([0,0]);
    
    dirs.split("").forEach((v,i)=>{
        //이동전 좌표
        let first = [...arr[arr.length-1]]; 
        //이동후 좌표
        let last = [...arr[arr.length-1]];

        switch(v){
            case "U":
                last[1] = last[1]+1;
                break;
            case "D":
                last[1] = last[1]-1;
                break;
            case "R":
                last[0] = last[0]+1;
                break;
            case "L":
                last[0] = last[0]-1;
                break;
            default:
                break;
        }
        
        //중복,범위 초과 체크
        let check = false;
        
        //좌표값이 범위를 초과했는지 체크
        if(last[0] >5 || last[0] <-5){
            check = true;
        }
        else if(last[1]>5 || last[1]<-5){
            check = true;
        }        
        else{
            //현재 좌표와 이동되는 자표를 지났는지 체크
            for(let i=0; i<arr.length-1; i++){            
                if(JSON.stringify(arr[i])==JSON.stringify(first)){
                    if(JSON.stringify(arr[i+1])==JSON.stringify(last)){
                        check = true;                 
                        break;
                    }
                }
                else if(JSON.stringify(arr[i])==JSON.stringify(last)){
                    if(JSON.stringify(arr[i+1])==JSON.stringify(first)){
                        check = true;
                        break;
                    }
                }
            }
            arr.push([...last]);
        }        
        answer += check ? 0 : 1;                
    });
                
    return answer;
}