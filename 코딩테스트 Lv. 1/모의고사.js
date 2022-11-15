function solution(answers) {
    var answer = [];
    
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let [arr1_cnt,arr2_cnt,arr3_cnt] = [0,0,0];    
    
    answers.forEach((v,i)=>{
        arr1_cnt += v===arr1[i%5]?1:0;
        arr2_cnt += v===arr2[i%8]?1:0;
        arr3_cnt += v===arr3[i%10]?1:0;
    });
    
    let max = Math.max(arr1_cnt,arr2_cnt,arr3_cnt)

    if(arr1_cnt===max){
        answer.push(1);
    }
    if(arr2_cnt===max){
        answer.push(2);
    }
    if(arr3_cnt===max){
        answer.push(3);
    }
    
    return answer;
}