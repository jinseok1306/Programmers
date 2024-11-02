function solution(bandage, health, attacks) {
    let answer = 0;   
    let health_val = health;
    let last_val = attacks[attacks.length-1][0];    
    let stead_val = 0;
    let index = 0;
            
    const [time_val, care_val, add_val] = bandage;
    //시전 시간, 초당 회복량, 추가 회복량
    
    for(let i=1; i<=last_val; i++){        
        if(i > attacks[index][0]){            
            index++;            
        }
        
        if(i == attacks[index][0]){                        
            health_val -= attacks[index][1];
            stead_val = 0;
        }
        else if(health_val<health){
            stead_val++;
            
            //초당 회복
            health_val += care_val;

            //추가 회복
            if(stead_val%time_val == 0){
                health_val += add_val;
            }

            if(health_val>= health){
                health_val = health;
            }
        }        
            
        //체력 확인
        if(health_val<=0){
            answer = -1;
            break;                     
        }                 
    }    
                 
    return (answer == -1) ? -1 : health_val;
}