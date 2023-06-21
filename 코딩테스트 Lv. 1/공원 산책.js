function solution(park, routes) {
    let answer = [];
    let start = [];    
    let disable_map = [];
    let map_x = 0;
    let map_y = 0;
    
    //공원의 가로세로 저장
    map_y = park[0].replace(/\"/g).length;
    map_x = park.length;
        
    //이동 가능한 전체 좌표 만들기
    park.forEach((v,i)=>{
        v.replace(/\""/g).split("").forEach((e,j)=>{
            //시작 좌표 저장
            if(e==="S"){
                start.push([i,j]);
            }            
            //이동불좌표 저장
            else if(e==="X"){
                disable_map.push(`(${i},${j})`);    
            }            
        })
    })
    
    routes.forEach((v)=>{
        let [route,jump] = v.split(" ");
        let temp = [];
        let disble_flag = false;
        
        if(route === "E"){
            temp.push([start[0][0],start[0][1]+Number(jump)]);
            
            //X좌표가 경로에 있는지 체크
            for(let i=start[0][1]+1; i<=start[0][1]+Number(jump); i++){               
                if(disable_map.indexOf(`(${start[0][0]},${i})`)>=0){                   
                    disble_flag = true;
                    break;
                }
            }
        }
        else if(route === "W"){
            temp.push([start[0][0],start[0][1]-Number(jump)]);
            
            //X좌표가 경로에 있는지 체크
            for(let i=start[0][1]-1; i>=start[0][1]-Number(jump); i--){               
                if(disable_map.indexOf(`(${start[0][0]},${i})`)>=0){                   
                    disble_flag = true;
                    break;
                }
            }
        }
        else if(route === "S"){
            temp.push([start[0][0]+Number(jump),start[0][1]]);
            
            //X좌표가 경로에 있는지 체크
            for(let i=start[0][0]+1; i<=start[0][0]+Number(jump); i++){               
                if(disable_map.indexOf(`(${i},${start[0][1]})`)>=0){                   
                    disble_flag = true;
                    break;
                }
            }
        }
        else if(route === "N"){
            temp.push([start[0][0]-Number(jump),start[0][1]]);
            
            //X좌표가 경로에 있는지 체크
            for(let i=start[0][0]-1; i>=start[0][0]-Number(jump); i--){
                if(disable_map.indexOf(`(${i},${start[0][1]})`)>=0){                   
                    disble_flag = true;
                    break;
                }
            }
        }
        
        if(!disble_flag){
            if(temp[0][0]>=0&&temp[0][0]<map_x&&temp[0][1]>=0&&temp[0][1]<map_y){
                start = temp;
            }       
        }        
    })
        
    answer.push(start[0][0]);
    answer.push(start[0][1]);
    
    return answer;
}