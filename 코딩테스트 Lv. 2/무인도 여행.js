function solution(maps) {
    const result = [];    
    //2차원배열로 변경
    maps = maps.map((v)=>v.split(""));
    
    const dfs = (dx,dy) => {
        //범위를 초과했거나 바다인 경우는 제외
        if(dx<0||dy<0||dx>=maps.length||dy>=maps[0].length||maps[dx][dy]==="X") return 0;

        const now = parseInt(maps[dx][dy]);
        //현재 위치는 체크했으므로 중복으로 체크 안하기 위해 X로 변경
        maps[dx][dy] = "X";
        //이제 상하좌우 깊이탐색을 진행하고 총합계가 섬의 식량값이 된다.
        return now + dfs(dx-1,dy) + dfs(dx+1,dy) + dfs(dx,dy-1) + dfs(dx,dy+1);       
    }
    
    //전체 범위를 한번씩 확인
    for(let x=0; x<maps.length; x++){
        for(let y=0; y<maps[x].length; y++){
            //바다는 제외하고 깊이탐색 진행
            if(maps[x][y] !== "X") result.push(dfs(x,y));
        }
    }
        
    return result.length ? result.sort((a,b)=>a-b): [-1];
}