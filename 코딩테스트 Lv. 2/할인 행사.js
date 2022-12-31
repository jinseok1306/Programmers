function solution(want, number, discount) {
    let answer = 0;
    
    for(let i=0; i<discount.length; i++){
        //회원 자격(10일)동안 할인되는 품목
        let arr = discount.slice(i,10+i);
        let num_check = new Array(want.length).fill(0);
        
        //기간동안 할인되는 품목이 있는 경우
        if(!!arr.length){
            arr.forEach((v)=>{
                let index = want.indexOf(v);
                if(index>=0){     
                    //할인상품 number와 비교 후 초과 시 카운트 안되도록 처리
                    num_check[index] += (number[index]>num_check[index])?1:0;
                }                
            });
            //두 배열을 문자열로 변경 후 비교
            if(number.join(',') === num_check.join(',')){
                answer++;
            }
        }
        //할인상품이 없는 경우 비교할 필요가 없기에 break
        else{
            break;
        }
    }
    
    return answer;
}