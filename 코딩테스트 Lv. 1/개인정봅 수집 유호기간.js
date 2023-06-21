function solution(today, terms, privacies) {
    let answer = [];    
    //1년 336일 (28*12)    
    
    privacies.forEach((v)=>{
        let str = v.replace(/\""/g);
        let temp_arr = [];
        let terms_arr = {};
        //년[0]
        temp_arr.push(Number(str.slice(0,4)));
        //월[1]
        temp_arr.push(Number(str.slice(5,7)));
        //일[2]
        temp_arr.push(Number(str.slice(8,10)));
        
        //약관 타입[3]
        temp_arr.push(str.slice(11,12));
        
        //약관 유효기간 카테고리
        terms.forEach((e)=>{
            let terms_temp = e.split(" ");
            terms_arr[terms_temp[0]] = Number(terms_temp[1]);            
        })
        
        //약관 유효기간[4]
        temp_arr.push(terms_arr[str.slice(11,12)]);
        
        //만료일자
        let year_val = '';
        let month_val = '';
        let day_val = '';        
        let sum_day = temp_arr[2] + temp_arr[4]*28;
        
        if(sum_day>28){            
            if(((sum_day/28).toFixed()+temp_arr[1])>12){
                year_val = temp_arr[0] + (((sum_day/28).toFixed()+temp_arr[1])/12).toFixed();
                month_val = (sum_day/28+temp_arr[1])%12 === 0 
                    ? 12 : (sum_day/28+temp_arr[1])%12;
                day_val = sum_day%28 ===0 ? 28 : sum_day%28;    
            }
            else{
                year_val = temp_arr[0];
                month_val = sum_day/28+temp_arr[1];
                day_val = sum_day%28 ===0 ? 28 : sum_day%28;         
            }
        }
        else{
            year_val = temp_arr[0];
            month_val = temp_arr[1];
            day_val = sum_day;            
        }
        
        temp_arr.push(temp_arr.push);
        
        console.log(`${year_val} ${month_val} ${day_val}`);
    })
    
    
    return answer;
}