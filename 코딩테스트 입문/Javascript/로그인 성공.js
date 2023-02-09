function solution(id_pw, db) {
    db = db.filter(v=>v[0]===id_pw[0]);

    if (!db.length) return 'fail';
        
    for (let d of db) if (d[1] === id_pw[1]) return 'login';

    //forEach 쓸 경우 return으로 끝나지 않고 계속 처리되기에 사용안함
    //db.forEach((e)=>{
    //    if (e[1] === id_pw[1]) return 'login';
    //})
    
    return 'wrong pw';
}