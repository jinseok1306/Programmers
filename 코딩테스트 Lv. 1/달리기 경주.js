function solution(players, callings) {      
    
    let myObj = {};
    
    //처음에 각 플레이어의 순위를 객체로 저장
    players.forEach((v,i)=>{
        myObj[v] = i;
    })
    
    callings.forEach((v)=>{        
        let index = myObj[v];
        let fore_runner = players[index-1];
        
        players[index] = fore_runner;
        myObj[v] = index-1;
        players[index-1] = v;
        myObj[fore_runner] = index;
    })
    
    return players;
}