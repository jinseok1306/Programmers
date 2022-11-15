function solution(a, b) {      
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let date = `2016-${a}-${b}`;    
    const dayOfWeek = week[new Date(date).getDay()];
    
    return dayOfWeek;
}