function solution(s) {
    var answer = [];
    
    let list = s.replace("{{","").replace("}}","").split("},{");
    let setList = [];
    list.forEach((v)=>{
        setList.push(v.split(","));
    })
    
    setList.sort((a,b)=>{
        if (a.length > b.length) {
          return 1;
        } else {
          return -1;
        }
    })
    
    let mySet = new Set();
    
    setList.forEach((v)=>{
        v.forEach((e)=>{
            mySet.add(Number(e));
        })
    })
    
    answer = [...mySet];

    return answer;
}