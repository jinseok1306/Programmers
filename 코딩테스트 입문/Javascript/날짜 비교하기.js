function solution(date1, date2) {
    let answer = 0;
    
    let date1_val = new Date(`${date1[0]}-${date1[1]}-${date1[2]}`);
    let date2_val = new Date(`${date2[0]}-${date2[1]}-${date2[2]}`);
    
    answer = date1_val<date2_val ? 1 : 0;
    
    return answer;
}