function solution(orders, course) {
    //주문 내역
    const ordered = {};
    //코스 후보 내역
    const candidates = {};
    //course의 최대값이 10이기에 동일한 크기로 생성
    const maxNum = Array(11).fill(0);

    const createSet = (arr,start,len, foods) =>{
        if(len === 0){
            ordered[foods] = (ordered[foods] || 0) + 1;
            //2회 이상 주문 시 코스 후보에 저장
            if(ordered[foods]>1) candidates[foods] = ordered[foods];
            //코스 배열에 주문횟수 저장(이후 candidates와 비교하여 필터링하기 위함)
            maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
            return;
        }
        
        for(let i=start; i<arr.length; i++){
            createSet(arr,i+1, len-1, foods+arr[i]);
        }
    };
    
    orders.forEach((v)=>{
        //알파벳 순서로 분류
        const sorted = v.split('').sort();
        
        //코스에 해당하는 데이터 생성
        course.forEach((e)=>{
            createSet(sorted,0,e,'');
        });
    });
    
    //2번 이상 주문된 내역만 필터링
    const launched = Object.keys(candidates).filter(
        (food) => maxNum[food.length] === candidates[food]
    );

    //알파벳 순으로 정렬
    return launched.sort();
}