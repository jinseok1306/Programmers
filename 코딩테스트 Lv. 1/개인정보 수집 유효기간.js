function solution(today, terms, privacies) {
    let answer = [];        
                    
    privacies.forEach((v,i)=>{
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
                          
        year_val = temp_arr[0] + ((temp_arr[4]+temp_arr[1])%12===0 ? Math.trunc((temp_arr[4]+temp_arr[1])/12)-1 : Math.trunc((temp_arr[4]+temp_arr[1])/12));           
        month_val = (temp_arr[1] + temp_arr[4])%12 === 0 ? 12 : (temp_arr[1] + temp_arr[4])%12;
        day_val = temp_arr[2];     
                        
        //유효일자 비교
        let today_val = new Date(today);
        let expire_val = new Date(`${year_val}.${month_val}.${day_val}`);
        
        if(today_val>=expire_val){
            answer.push(i+1);            
        }        
    })
    
    
    return answer;
}