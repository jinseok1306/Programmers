function solution(keyinput, board) {     
    let [x,y] = [0,0];
    let [width, height] = board;

    keyinput.forEach((e)=>{
        if(e==="left"){
            x--;
        }
        else if(e==="right"){
            x++;
        }
        else if(e==="up"){
            y++;
        }
        else if(e==="down"){
            y--;
        }
        
        if(x> Math.floor(width/2)){
            x = Math.floor(width/2);
        }
        else if(x< -1 * Math.floor(width/2)){
            x = -1 * Math.floor(width/2);
        }
        
        if(y> Math.floor(height/2)){
            y = Math.floor(height/2);
        }
        else if(y< -1 * Math.floor(height/2)){
            y = -1 * Math.floor(height/2);
        }
    });
    
    return [x, y];
}