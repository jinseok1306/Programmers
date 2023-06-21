function solution(wallpaper) {
    let answer = [];
    let row = wallpaper[0].replace(/\"/g).length
    let col = wallpaper.length;
    let arrX = [];
    let arrY = [];
    
    wallpaper.forEach((v,i)=>{
        v.replace(/\"/g).split("").forEach((e,j)=>{
            if(e==="#"){
                arrX.push(i);
                arrY.push(j);
            }
        })
    })
    
    //드래그 시작점 x 좌표
    answer.push(Math.min(...arrX));
    //드래그 시작점 y 좌표
    answer.push(Math.min(...arrY));
    //드래그 종료점 x 좌표
    answer.push(Math.max(...arrX)+1);
    //드래그 종료점 y 좌표
    answer.push(Math.max(...arrY)+1);
    
    return answer;
}