function solution(sides) {
    let answer = 0;
    
    sides.sort((a,b)=>a-b);
    
    answer = sides[2]<sides[0]+sides[1] ? 1 : 2;
    
    return answer;
}