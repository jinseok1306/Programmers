function solution(numbers, hand) {    
    let answer = "";
    
    //현재 버튼위치
    let left_location = '*';
    let right_location = '#';    
    
    //버튼 배열
    const num_arr1 = ['1','4','7','*'];
    const num_arr2 = ['2','5','8','0'];
    const num_arr3 = ['3','6','9','#'];
    
    numbers.forEach((e)=>{
        //좌측배열은 왼손만 이동가능
        if(num_arr1.includes(e.toString())){
            left_location = e.toString();
            answer+="L";
        }   
        //우측배열은 오른손만 이동가능
        else if(num_arr3.includes(e.toString())){
            right_location = e.toString();
            answer+="R";
        }
        //가운데 배열은 거리비교하여 이동
        else {
            let left_diff = 0;
            let right_diff = 0;
            
            //왼손위치 거리 체크
            if(num_arr1.includes(left_location)){
                //배열 위치가 다른 경우 한번 더 이동하기에 +1
                left_diff = Math.abs(num_arr2.indexOf(e.toString())-num_arr1.indexOf(left_location))+1;
            }
            else if(num_arr2.includes(left_location)){
                left_diff = Math.abs(num_arr2.indexOf(e.toString())-num_arr2.indexOf(left_location));
            }
            
            //오른손위치 거리 체크
            if(num_arr3.includes(right_location)){
                //배열 위치가 다른 경우 한번 더 이동하기에 +1
                right_diff = Math.abs(num_arr2.indexOf(e.toString())-num_arr3.indexOf(right_location))+1;
            }
            else if(num_arr2.includes(right_location)){
                right_diff = Math.abs(num_arr2.indexOf(e.toString())-num_arr2.indexOf(right_location));
            }
            
            //거리가 더 짧은 손으로 이동
            if(left_diff<right_diff){
                left_location = e.toString();
                answer+="L";
            }
            else if(left_diff>right_diff){
                right_location = e.toString();
                answer+="R";
            }
            //거리가 같을 경우 오른손잡이,왼손잡이 여부로 처리
            else{                
                if(hand === "right"){
                    right_location = e.toString();
                    answer+="R";
                }
                else if(hand === "left"){
                    left_location = e.toString();
                    answer+="L";
                }
            }                                                
        }
    })
        
    return answer;
}